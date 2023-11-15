import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OtrosServiciosPageRoutingModule } from './otros-servicios-routing.module';

import { OtrosServiciosPage } from './otros-servicios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OtrosServiciosPageRoutingModule
  ],
  declarations: [OtrosServiciosPage]
})
export class OtrosServiciosPageModule {}
