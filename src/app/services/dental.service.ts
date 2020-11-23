import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { from, Observable } from 'rxjs';
import { Dental } from '../model/dental';

@Injectable()
export class DentalService{
    dental : Dental = new Dental();

    constructor(private firestore: AngularFirestore){

    }

    listaDeDentais() : Observable<any>{

        // Observable -> Aguardar resposta do servidor
        return from(new Observable(observe =>{ // converter para Observable
            
            // this.firestore.collection('cliente') -> Selecionar a coleção no Firestore
            // .snapshotChanges().subscribe -> Tentar buscar no servidor
            // response -> dados baixados do servidor, os clientes
            this.firestore.collection('dental').snapshotChanges().subscribe(response=>{
                // transformar response em array de clientes
                let lista: Dental[] = [];
                response.map(obj =>{
                    // será repetido para cada registro, cada registro do Firestore se chama obj
                    let dental: Dental = new Dental();
                   dental.setData(obj.payload.doc.data());// obj.payload.doc.data() -> Dados do dental
                   dental.id = obj.payload.doc.id; // inserindo ID
                    lista.push(dental); // adicionando o cliente na lista // push é adicionar
                });
                observe.next(lista);
            })

        }))
    }

    cadastrar(dental : any) : Observable<any>{
        return from(new Observable(observe => {
            // add cria um novo documento
            this.firestore.collection('dental').add(dental).then(response=>{
                observe.next("Cadastrado com sucesso!");
            },(err)=>{
                observe.error("Erro ao cadastrar!");
            })

        }));   
    }

    buscaPorId(id : any) : Observable<any>{
        return from(new Observable(observe => {
            // .doc(id).snapshotChanges() -> Busca pelo id do documento
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