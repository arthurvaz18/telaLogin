import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventoRoutingModule } from './evento-routing.module';
import {EventoComponent} from "./evento.component";
import {CadastrarEventoComponent} from "./cadastrar/cadastrar-evento.component";


@NgModule({
  declarations: [
    EventoComponent,
    CadastrarEventoComponent
  ],
  imports: [
    CommonModule,
    EventoRoutingModule
  ]
})
export class EventoModule { }
