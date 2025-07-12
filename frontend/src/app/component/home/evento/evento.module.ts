import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventoRoutingModule } from './evento-routing.module';
import {EventoComponent} from "./evento.component";
import {CadastrarEventoComponent} from "./cadastrar/cadastrar-evento.component";
import {DxButtonModule, DxDateBoxModule, DxFormModule, DxSelectBoxModule, DxTextBoxModule} from "devextreme-angular";


@NgModule({
  declarations: [
    EventoComponent,
    CadastrarEventoComponent
  ],
  imports: [
    CommonModule,
    EventoRoutingModule,
    DxFormModule,
    DxTextBoxModule,
    DxDateBoxModule,
    DxSelectBoxModule,
    DxButtonModule
  ]
})
export class EventoModule { }
