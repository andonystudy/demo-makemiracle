import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatrocinadorRoutingModule } from './patrocinador-routing.module';
import { PatrocinadorComponent } from './patrocinador.component';


@NgModule({
  declarations: [PatrocinadorComponent],
  imports: [
    CommonModule,
    PatrocinadorRoutingModule
  ]
})
export class PatrocinadorModule { }
