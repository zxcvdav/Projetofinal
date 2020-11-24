import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CurriculoExcluirPageRoutingModule } from './curriculo-excluir-routing.module';

import { CurriculoExcluirPage } from './curriculo-excluir.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CurriculoExcluirPageRoutingModule
  ],
  declarations: [CurriculoExcluirPage]
})
export class CurriculoExcluirPageModule {}
