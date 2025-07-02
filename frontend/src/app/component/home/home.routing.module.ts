import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home.component';
import { PerfilComponent } from './perfil/perfil.component';
import { HorarioComponent } from './horario/horario.component';
import { CardapioComponent } from './cardapio/cardapio.component';
import { BebidasComponent } from './bebidas/bebidas.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { HistoricoComponent } from './historico/historico.component';
import { LocalizacaoComponent } from './localizacao/localizacao.component';
import { ConfiguracoesComponent } from './configuracoes/configuracoes.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: 'perfil', component: PerfilComponent },
      { path: 'horario', component: HorarioComponent },
      { path: 'cardapio', component: CardapioComponent },
      { path: 'bebidas', component: BebidasComponent },
      { path: 'pedidos', component: PedidosComponent },
      { path: 'historico', component: HistoricoComponent },
      { path: 'localizacao', component: LocalizacaoComponent },
      { path: 'configuracoes', component: ConfiguracoesComponent },

      { path: '', redirectTo: 'perfil', pathMatch: 'full' } // rota default dentro do home
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
