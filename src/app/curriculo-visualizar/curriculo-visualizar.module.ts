import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CurriculoVisualizarPageRoutingModule } from './curriculo-visualizar-routing.module';

import { CurriculoVisualizarPage } from './curriculo-visualizar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CurriculoVisualizarPageRoutingModule
  ],
  declarations: [CurriculoVisualizarPage]
})
export class CurriculoVisualizarPageModule {}
