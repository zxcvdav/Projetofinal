import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { from, Observable } from 'rxjs';
import { Curriculo } from '../model/curriculo';

@Injectable()
export class CurriculoService{
    curriculo : Curriculo = new Curriculo();

    constructor(private firestore: AngularFirestore){

    }

    listaDeCurriculos() : Observable<any>{

     
        return from(new Observable(observe =>{ 
            
            
            this.firestore.collection('curriculo').snapshotChanges().subscribe(response=>{
               
                let lista: Curriculo[] = [];
                response.map(obj =>{
 
                    let curriculo: Curriculo = new Curriculo();
                   curriculo.setData(obj.payload.doc.data());
                   curriculo.id = obj.payload.doc.id; 
                    lista.push(curriculo); 
                });
                observe.next(lista);
            })

        }))
    }

    cadastrar(curriculo : any) : Observable<any>{
        return from(new Observable(observe => {
            this.firestore.collection('curriculo').add(curriculo).then(response=>{
                observe.next("Cadastrado com sucesso o currículo!");
            },(err)=>{
                observe.error("Erro ao cadastrar o currículo!");
            })

        }));   
    }

    buscaPorId(id : any) : Observable<any>{
        return from(new Observable(observe => {
            this.firestore.collection('curriculo').doc(id).snapshotChanges().subscribe(response=>{
                console.log(response);
                let curriculo : Curriculo = new Curriculo();
                curriculo.id = response.payload.id;
                curriculo.setData(response.payload.data());
                observe.next(curriculo);

            },(err)=>{
                observe.error("Erro ao buscar o currículo!");
            })

        }));  
    }



    atualizar(curriculo : any)  : Observable<any>{
        return from(new Observable(observe => {

            this.firestore.collection('curriculo').doc(curriculo.id).set(curriculo).then(response=>{
                observe.next("Atualizado com sucesso!");
            },(err)=>{
                observe.error("Erro ao atualizar!");
            })

        })); 
    }

    excluir(curriculo : any)  : Observable<any>{
        return from(new Observable(observe => {

            this.firestore.collection('curriculo').doc(curriculo.id).delete().then(response=>{
                observe.next("Excluído com sucesso!");
            },(err)=>{
                observe.error("Erro ao excluir!");
            })

        })); 
    }


}