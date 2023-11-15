import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ServiciosElectricosPageRoutingModule } from './servicios-electricos-routing.module';

import { ServiciosElectricosPage } from './servicios-electricos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ServiciosElectricosPageRoutingModule
  ],
  declarations: [ServiciosElectricosPage]
})
export class ServiciosElectricosPageModule {}
