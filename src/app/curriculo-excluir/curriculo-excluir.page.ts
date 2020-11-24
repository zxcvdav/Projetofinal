import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Curriculo } from '../model/curriculo';
import { CurriculoService } from '../services/curriculo.service';
import { TemplateService } from '../services/template.service';

@Component({
  selector: 'app-curriculo-excluir',
  templateUrl: './curriculo-excluir.page.html',
  styleUrls: ['./curriculo-excluir.page.scss'],
})
export class CurriculoExcluirPage implements OnInit {

  curriculo : Curriculo = new Curriculo();

  constructor(private curriculoServ : CurriculoService,
    private route: ActivatedRoute,
    private navCtrl : NavController,
    private template : TemplateService) { }

  ngOnInit() {

    this.route.paramMap.subscribe(url=>{
      let id = url.get('id');
      
      this.curriculoServ.buscaPorId(id).subscribe(response=>{
        this.curriculo = response;
        
      })

    })

  }

  excluir(){

  this.template.loading.then(load => {

      load.present();

      this.curriculoServ.excluir(this.curriculo).subscribe(response => {

        load.dismiss();
        this.navCtrl.navigateForward(['/curriculo']);
      }, erro => {
        load.dismiss();
        this.template.myAlert("Erro ao Cadastrar o currículo");
      })

    })
  }

}
