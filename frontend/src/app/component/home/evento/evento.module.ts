import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventoRoutingModule } from './evento-routing.module';
import {EventoComponent} from "./evento.component";


@NgModule({
  declarations: [
    EventoComponent
  ],
  imports: [
    CommonModule,
    EventoRoutingModule
  ]
})
export class EventoModule { }
