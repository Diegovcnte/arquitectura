import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServiciosElectricosPage } from './servicios-electricos.page';

const routes: Routes = [
  {
    path: '',
    component: ServiciosElectricosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServiciosElectricosPageRoutingModule {}
