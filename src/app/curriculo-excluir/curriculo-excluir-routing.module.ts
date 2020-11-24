import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CurriculoExcluirPage } from './curriculo-excluir.page';

const routes: Routes = [
  {
    path: '',
    component: CurriculoExcluirPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CurriculoExcluirPageRoutingModule {}
