import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CadastroComponent} from "./component/cadastro/cadastro.component";
import {LoginComponent} from "./component/login/login.component";
import {HomeComponent} from "./component/home/home.component";
import {InicioComponent} from "./component/inicio/inicio.component";

const routes: Routes = [
  {path: 'cadastro', component: CadastroComponent, data: [{title: 'Cadastro'}]},
  {path: 'login', component: LoginComponent, data: [{title: 'Login'}]},
  {path: 'home', component: HomeComponent, data: [{title: 'Home'}]},
  {path: 'inicio', component: InicioComponent, data: [{title: 'Inicio'}]},

  {
    path: 'home',
    loadChildren: () =>
      import('./component/home/home.module').then(m => m.HomeModule)
  },

  {path: '', redirectTo: 'inicio', pathMatch: 'full'},
  {path: '**', redirectTo: 'inicio'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
