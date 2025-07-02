import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import {DxDrawerModule, DxListModule, DxButtonModule, DxToolbarModule} from 'devextreme-angular';

import { HomeComponent } from './home.component';
import { PerfilComponent } from './perfil/perfil.component';
import { HorarioComponent } from './horario/horario.component';
import { CardapioComponent } from './cardapio/cardapio.component';
import { BebidasComponent } from './bebidas/bebidas.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { HistoricoComponent } from './historico/historico.component';
import { LocalizacaoComponent } from './localizacao/localizacao.component';
import { ConfiguracoesComponent } from './configuracoes/configuracoes.component';
import {HomeRoutingModule} from "./home.routing.module";

@NgModule({
  declarations: [
    HomeComponent,
    PerfilComponent,
    HorarioComponent,
    CardapioComponent,
    BebidasComponent,
    PedidosComponent,
    HistoricoComponent,
    LocalizacaoComponent,
    ConfiguracoesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HomeRoutingModule,
    DxDrawerModule,
    DxListModule,
    DxButtonModule,
    DxToolbarModule
  ]
})
export class HomeModule {}
