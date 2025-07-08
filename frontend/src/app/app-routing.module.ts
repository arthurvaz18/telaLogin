import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './component/cadastro/cadastro.component';
import { LoginComponent } from './component/login/login.component';
import { InicioComponent } from './component/inicio/inicio.component';
import {AuthGuard} from "./services/guards/auth.guards";

const routes: Routes = [
  {
    path: 'cadastro',
    component: CadastroComponent,
    data: [{ title: 'Cadastro' }]
  },
  {
    path: 'login',
    component: LoginComponent,
    data: [{ title: 'Login' }]
  },
  {
    path: 'inicio',
    component: InicioComponent,
    data: [{ title: 'Início' }]
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./component/home/home.module').then(m => m.HomeModule),
    canActivate: [AuthGuard],
    data: [{ title: 'Home' }]
  },
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'inicio'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
