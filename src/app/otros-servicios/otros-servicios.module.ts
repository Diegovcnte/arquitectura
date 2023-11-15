import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OtrosServiciosPageRoutingModule } from './otros-servicios-routing.module';

import { OtrosServiciosPage } from './otros-servicios.page';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OtrosServiciosPageRoutingModule,
    SharedModule,
  ],
  declarations: [OtrosServiciosPage]
})
export class OtrosServiciosPageModule {}
