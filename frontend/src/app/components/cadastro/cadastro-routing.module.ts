import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes} from "@angular/router";
import {CadastroComponent} from "./cadastro.component";

const routes: Routes =[
  { path: '', component: CadastroComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class CadastroRoutingModule { }
