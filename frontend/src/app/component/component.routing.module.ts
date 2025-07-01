import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CadastroComponent} from './cadastro/cadastro.component';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from "./home/home.component";
import {InicioComponent} from "./inicio/inicio.component";

const routes: Routes = [
  { path: 'cadastro', component: CadastroComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'inicio', component: InicioComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentRoutingModule {}
