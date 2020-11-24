import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CurriculoNovoPageRoutingModule } from './curriculo-novo-routing.module';

import { CurriculoNovoPage } from './curriculo-novo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    CurriculoNovoPageRoutingModule
  ],
  declarations: [CurriculoNovoPage]
})
export class CurriculoNovoPageModule {}
