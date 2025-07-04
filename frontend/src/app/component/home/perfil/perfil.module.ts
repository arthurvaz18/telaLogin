import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {
  DxFormModule,
  DxButtonModule,
  DxTextBoxModule,
  DxSelectBoxModule,
  DxCheckBoxModule,
  DxTextAreaModule, DxDateBoxModule
} from 'devextreme-angular';

import { PerfilComponent } from './perfil.component';
import { EditarComponent } from './editar/editar.component';
import { VisualizarComponent } from './visualizar/visualizar.component';
import {PerfilRoutingModule} from "./perfil.routing.module";


@NgModule({
  declarations: [
    PerfilComponent,
    EditarComponent,
    VisualizarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PerfilRoutingModule,
    DxFormModule,
    DxButtonModule,
    DxTextBoxModule,
    DxSelectBoxModule,
    DxCheckBoxModule,
    DxTextAreaModule,
    DxDateBoxModule
  ]
})
export class PerfilModule { }
