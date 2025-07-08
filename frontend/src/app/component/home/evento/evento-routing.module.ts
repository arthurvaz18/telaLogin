import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EventoComponent} from "./evento.component";

const routes: Routes = [
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventoRoutingModule { }
