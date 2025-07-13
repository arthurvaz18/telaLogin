import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EstabelecimentoComponent } from './estabelecimento.component';

import {
  DxFormModule,
  DxButtonModule,
  DxTextBoxModule,
  DxSwitchModule,
  DxDateBoxModule,
  DxSelectBoxModule, DxCheckBoxModule, DxTextAreaModule
} from 'devextreme-angular';
import {EstabelecimentoRoutingModule} from "./estabelecimento.routing.module";
import {InfoEstabelecimentoComponent} from "./info-estabelecimento/info-estabelecimento.component";
import {PerfilModule} from "../perfil/perfil.module";
import {EventoModule} from "../evento/evento.module";

@NgModule({
  declarations: [
    EstabelecimentoComponent,
    InfoEstabelecimentoComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    EstabelecimentoRoutingModule,
    DxFormModule,
    DxButtonModule,
    DxTextBoxModule,
    DxSwitchModule,
    DxDateBoxModule,
    DxSelectBoxModule,
    DxCheckBoxModule,
    DxTextAreaModule,
    PerfilModule,
    EventoModule
  ]
})
export class EstabelecimentoModule {}
