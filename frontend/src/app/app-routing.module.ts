import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CadastroComponent} from "./components/cadastro/cadastro.component";
import {LoginComponent} from "./components/login/login.component";
import {DashboardComponent} from "./components/dashboard/dashboard.component";

const routes: Routes = [
  { path: 'cadastro', component: CadastroComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },

  { path: '', redirectTo: 'cadastro', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
