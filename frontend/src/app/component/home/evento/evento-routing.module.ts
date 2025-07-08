import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EventoComponent} from "./evento.component";
import {CadastrarEventoComponent} from "./cadastrar/cadastrar-evento.component";

const routes: Routes = [
  {
    path: '',
    component: EventoComponent,
    children: [
      { path: 'cadastrar-evento', component: CadastrarEventoComponent },
      { path: '', redirectTo: 'cadastrar-evento', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventoRoutingModule { }
