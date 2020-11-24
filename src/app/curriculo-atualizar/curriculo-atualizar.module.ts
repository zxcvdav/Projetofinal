import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CurriculoAtualizarPageRoutingModule } from './curriculo-atualizar-routing.module';

import { CurriculoAtualizarPage } from './curriculo-atualizar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    CurriculoAtualizarPageRoutingModule
  ],
  declarations: [CurriculoAtualizarPage]
})
export class CurriculoAtualizarPageModule {}
