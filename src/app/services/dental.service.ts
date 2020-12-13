import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Dental } from '../model/dental';
import {Material} from '../model/material';

@Injectable()
export class DentalService{
    dental : Dental = new Dental();
    material : Material = new Material();
    private materialCollection: AngularFirestoreCollection<Material>;
    constructor(private firestore: AngularFirestore,
        ){

    }

    listaDeDentais() : Observable<any>{

     
        return from(new Observable(observe =>{ 
            
            
            this.firestore.collection('dental').snapshotChanges().subscribe(response=>{
               
                let lista: Dental[] = [];
                response.map(obj =>{
 
                    let dental: Dental = new Dental();
                   dental.setData(obj.payload.doc.data());
                   dental.id = obj.payload.doc.id; 
                    lista.push(dental); 
                });
                observe.next(lista);
            })

        }))
    }

    cadastrar(dental : any) : Observable<any>{
        return from(new Observable(observe => {
            this.firestore.collection('dental').add(dental).then(response=>{
                observe.next("Cadastrado com sucesso!");
            },(err)=>{
                observe.error("Erro ao cadastrar!");
            })

        }));   
    }

    buscaPorId(id : any) : Observable<any>{
        return from(new Observable(observe => {
            this.firestore.collection('dental').doc(id).snapshotChanges().subscribe(response=>{
                console.log(response);
                let dental : Dental = new Dental();
                dental.id = response.payload.id;
                dental.setData(response.payload.data());
                observe.next(dental);

            },(err)=>{
                observe.error("Erro ao buscar o ID!");
            })

        }));  
    }
    
    buscaPorNome(nome: string): Observable<any> {

    
        return from(new Observable(observe => { 
            this.firestore.collection('dental').ref.orderBy("nome")
                .startAt(nome).endAt(nome + "\uf8ff").get().then(response => {
                    let lista: Dental[] = [];
                    response.docs.map(obj => {
                        
                        let dental: Dental = new Dental();
                        dental.setData(obj.data());
                        dental.id = obj.id; 
                        lista.push(dental); 
                    });
                    observe.next(lista);
                })

        }))
    }
    atualizar(dental : any)  : Observable<any>{
        return from(new Observable(observe => {

            this.firestore.collection('dental').doc(dental.id).set(dental).then(response=>{
                observe.next("Atualizado com sucesso!");
            },(err)=>{
                observe.error("Erro ao atualizar!");
            })

        })); 
    }

    excluir(dental : any)  : Observable<any>{
        return from(new Observable(observe => {

            this.firestore.collection('dental').doc(dental.id).delete().then(response=>{
                observe.next("Excluído com sucesso!");
            },(err)=>{
                observe.error("Erro ao excluir!");
            })

        })); 
    }
  


}