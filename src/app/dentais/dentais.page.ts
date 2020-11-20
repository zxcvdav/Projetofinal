import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
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
    private navCtrl : NavController) { }

  ngOnInit() {
    this.dentalServ.listaDeDentais().subscribe(response=>{
      // O servidor respondeu
      console.log(response); // remover, apenas para testar no console
      this.lista = response;
      console.log(this.lista); // remover, apenas para testar no console

      
    },err=>{
      // erro
    })
  }

  visualizar(dental){
    this.navCtrl.navigateForward(['/dental-visualizar',dental.id])
  }

}