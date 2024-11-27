import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BuscarEventosPage } from './buscar-eventos.page';

const routes: Routes = [
  {
    path: '',
    component: BuscarEventosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BuscarEventosPageRoutingModule {}
