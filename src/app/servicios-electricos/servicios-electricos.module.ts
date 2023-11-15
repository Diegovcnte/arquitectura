import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ServiciosElectricosPageRoutingModule } from './servicios-electricos-routing.module';

import { ServiciosElectricosPage } from './servicios-electricos.page';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ServiciosElectricosPageRoutingModule,
    SharedModule,
  ],
  declarations: [ServiciosElectricosPage]
})
export class ServiciosElectricosPageModule {}
