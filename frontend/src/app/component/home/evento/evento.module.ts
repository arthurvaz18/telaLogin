import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventoRoutingModule } from './evento-routing.module';
import {EventoComponent} from "./evento.component";
import {CadastrarEventoComponent} from "./cadastrar/cadastrar-evento.component";
import {
    DxButtonModule,
    DxDataGridModule,
    DxDateBoxModule,
    DxFormModule, DxLoadIndicatorModule,
    DxSelectBoxModule, DxTextAreaModule,
    DxTextBoxModule
} from "devextreme-angular";
import {VisualizarEventoComponent} from "./visualizar/visualizar.evento.component";


@NgModule({
  declarations: [
    EventoComponent,
    CadastrarEventoComponent,
    VisualizarEventoComponent
  ],
  exports: [
    VisualizarEventoComponent
  ],
    imports: [
        CommonModule,
        EventoRoutingModule,
        DxFormModule,
        DxTextBoxModule,
        DxDateBoxModule,
        DxSelectBoxModule,
        DxButtonModule,
        DxDataGridModule,
        DxTextAreaModule,
        DxLoadIndicatorModule
    ]
})
export class EventoModule { }
