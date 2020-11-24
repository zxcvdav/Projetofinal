import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Curriculo } from '../model/curriculo';
import { CurriculoService } from '../services/curriculo.service';


@Component({
  selector: 'app-curriculos',
  templateUrl: './curriculos.page.html',
  styleUrls: ['./curriculos.page.scss'],
})
export class CurriculosPage implements OnInit {

  lista: Curriculo[] = [];

  constructor(private curriculoServ: CurriculoService,
    private navCtrl: NavController) { }

  ngOnInit() {
    this.curriculoServ.listaDeCurriculos().subscribe(response => {

      console.log(response);
      this.lista = response;
      console.log(this.lista);


    }, err => {
    });
  }

  visualizar(curriculo) {
    this.navCtrl.navigateForward(['/curriculo-visualizar', curriculo.id]);
  }




}
