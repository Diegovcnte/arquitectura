import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrearcuentaPageRoutingModule } from './crearcuenta-routing.module';

import { CrearcuentaPage } from './crearcuenta.page';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrearcuentaPageRoutingModule,
    SharedModule,
  ],
  declarations: [CrearcuentaPage]
})
export class CrearcuentaPageModule {}
