import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AlertController, LoadingController, NavController, ToastController } from '@ionic/angular';

import { Dental } from '../model/dental';

import { DentalService } from '../services/dental.service';


@Component({
  selector: 'app-dentais',
  templateUrl: './dentais.page.html',
  styleUrls: ['./dentais.page.scss'],
})
export class DentaisPage implements OnInit {
 
  lista : Dental[] = [];

  constructor(private dentalServ : DentalService,
    private navCtrl : NavController,
    private alertCtrl : AlertController,
    private loading: LoadingController,
    private toast : ToastController,
    private afAuth : AngularFireAuth) { }

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