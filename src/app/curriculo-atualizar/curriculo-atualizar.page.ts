import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Curriculo } from '../model/curriculo';
import { CurriculoService } from '../services/curriculo.service';
import { TemplateService } from '../services/template.service';

@Component({
  selector: 'app-curriculo-atualizar',
  templateUrl: './curriculo-atualizar.page.html',
  styleUrls: ['./curriculo-atualizar.page.scss'],
})
export class CurriculoAtualizarPage implements OnInit {

  formGroup : FormGroup;
  curriculo : Curriculo = new Curriculo();

  constructor(private curriculoServ : CurriculoService,
    private route: ActivatedRoute,
    private navCtrl : NavController,
    private formBuilder : FormBuilder,
    private template : TemplateService) {
      this.iniciarForm();
    }

  ngOnInit() {

    this.route.paramMap.subscribe(url=>{
      let idc = url.get('id');
      
      this.curriculoServ.buscaPorId(idc).subscribe(response=>{
        this.curriculo = response;
        this.iniciarForm();
      })

    })

  }

  atualizar() {
    this.template.loading.then(load => {

      load.present();

      this.curriculoServ.atualizar(this.formGroup.value).subscribe(response => {
        console.log("OK");
        load.dismiss();
        this.template.myAlert(response);
      }, erro => {
        console.log("Erro");
        load.dismiss();
        this.template.myAlert("Erro ao atualizar o currículo");
      })

    })
  }

  iniciarForm() {
    this.formGroup = this.formBuilder.group({
      id: [this.curriculo.id],
      nome: [this.curriculo.nome],
      arquivo: [this.curriculo.arquivo],
      email: [this.curriculo.email],
      telefone: [this.curriculo.telefone]
    })
  }

}
