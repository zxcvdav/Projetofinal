import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Curriculo } from '../model/curriculo';
import { CurriculoService } from '../services/curriculo.service';

@Component({
  selector: 'app-curriculo-visualizar',
  templateUrl: './curriculo-visualizar.page.html',
  styleUrls: ['./curriculo-visualizar.page.scss'],
})
export class CurriculoVisualizarPage implements OnInit {

  curriculo : Curriculo = new Curriculo();

  constructor(private curriculoServ : CurriculoService,
    private route: ActivatedRoute,
    private navCtrl : NavController) { }

  ngOnInit() {

    this.route.paramMap.subscribe(url=>{
      let id = url.get('id');
      
      this.curriculoServ.buscaPorId(id).subscribe(response=>{
        this.curriculo = response;
        
      })

    })

  }

  atualizar(){
    this.navCtrl.navigateForward(['/curriculo-atualizar',this.curriculo.id]);
  }

  excluir(){
    this.navCtrl.navigateForward(['/curriculo-excluir',this.curriculo.id]);
  }

}