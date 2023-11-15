import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { CircleComponent } from './components/circle/circle.component';
import { PatronComponent } from './components/patron/patron.component';



@NgModule({
  declarations: [
    HeaderComponent,
    ToolbarComponent,
    CircleComponent,
    PatronComponent,
    
  ],
  exports:[
    HeaderComponent,
    ToolbarComponent,
    CircleComponent,
    PatronComponent,
    
  ],
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
  ]
})
export class SharedModule { }
