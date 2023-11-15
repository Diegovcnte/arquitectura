import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OtrosServiciosPage } from './otros-servicios.page';

const routes: Routes = [
  {
    path: '',
    component: OtrosServiciosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OtrosServiciosPageRoutingModule {}
