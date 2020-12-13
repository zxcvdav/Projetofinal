import { Component, OnInit, ViewChild } from '@angular/core';
import {  NavController } from '@ionic/angular';
import { Dental } from '../model/dental';
import { DentalService } from '../services/dental.service';


@Component({
  selector: 'app-dentais',
  templateUrl: './dentais.page.html',
  styleUrls: ['./dentais.page.scss'],
})
export class DentaisPage implements OnInit {
 
  @ViewChild("nome") nome; 

  lista : Dental[] = [];

  constructor(private dentalServ : DentalService,
    private navCtrl : NavController) { }

  ngOnInit() {
    this.dentalServ.listaDeDentais().subscribe(response=>{
      
      
      this.lista = response;
     

      
    },err=>{
    
    })
  }

  visualizar(dental){
    this.navCtrl.navigateForward(['/dental-visualizar',dental.id])
  }

  pesquisar(){
    console.log("Busca por: "+this.nome.value)
    this.dentalServ.buscaPorNome(this.nome.value).subscribe(response=>{
      this.lista = [];
      this.lista = response;
    });
  }
  

}