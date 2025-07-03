import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EstabelecimentoComponent} from './estabelecimento.component';
import {InfoEstabelecimentoComponent} from "./info-estabelecimento/info-estabelecimento.component";

const routes: Routes = [
  {
    path: '',
    component: EstabelecimentoComponent,
    children: [
      {path: 'info-estabelecimento', component: InfoEstabelecimentoComponent},
      {path: '', redirectTo: 'info-estabelecimento', pathMatch: 'full'},
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstabelecimentoRoutingModule {
}
