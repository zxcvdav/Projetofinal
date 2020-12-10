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
 
  @ViewChild('map',{static:true}) mapElement: any;

  lista : Dental[] = [];
  
  constructor(private dentalServ : DentalService,
 
    
    private navCtrl : NavController
   ) { }

  ngOnInit() {
    

    this.dentalServ.listaDeDentais().subscribe(response=>{
    
      console.log(response); 
      this.lista = response;
      console.log(this.lista); 

      
    },err=>{
  
    })
  }

  visualizar(dental){
    this.navCtrl.navigateForward(['/dental-visualizar',dental.id])
  }
  


 
}