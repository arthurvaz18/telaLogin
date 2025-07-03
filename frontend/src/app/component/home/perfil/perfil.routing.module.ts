import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PerfilComponent } from './perfil.component';
import { EditarComponent } from './editar/editar.component';
import { VisualizarComponent } from './visualizar/visualizar.component';

const routes: Routes = [
  {
    path: '',
    component: PerfilComponent,
    children: [
      { path: 'visualizar', component: VisualizarComponent },
      { path: 'editar', component: EditarComponent },
      { path: '', redirectTo: 'visualizar', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerfilRoutingModule {}
