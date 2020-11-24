import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CurriculoAtualizarPage } from './curriculo-atualizar.page';

const routes: Routes = [
  {
    path: '',
    component: CurriculoAtualizarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CurriculoAtualizarPageRoutingModule {}
