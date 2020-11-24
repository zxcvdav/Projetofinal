import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CurriculoService } from '../services/curriculo.service';
import { TemplateService } from '../services/template.service';

@Component({
  selector: 'app-curriculo-novo',
  templateUrl: './curriculo-novo.page.html',
  styleUrls: ['./curriculo-novo.page.scss'],
})
export class CurriculoNovoPage implements OnInit {

  formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private template: TemplateService,
    private curriculoServ: CurriculoService
  ) {
    this.iniciarForm();
  }

  ngOnInit() {
  }

  iniciarForm() {
    this.formGroup = this.formBuilder.group({
      nome: [],
      arquivo: [],
      email: [],
      telefone: []
    })
  }

  cadastrar() {
    this.template.loading.then(load => {

      load.present();

      this.curriculoServ.cadastrar(this.formGroup.value).subscribe(response => {
        console.log("OK");
        load.dismiss();
        this.template.myAlert(response);
      }, erro => {
        console.log("Erro");
        load.dismiss();
        this.template.myAlert("Erro ao Cadastrar");
      })

    })
  }
}