import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatButtonModule} from "@angular/material/button";
import {CadastroComponent} from "./cadastro.component";
import {NgxMaskModule} from "ngx-mask";
import {CadastroRoutingModule} from "./cadastro-routing.module";



@NgModule({
  declarations: [
    CadastroComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    NgxMaskModule.forRoot(),
    CadastroRoutingModule
  ],
  exports: [
    CadastroComponent
  ]
})
export class CadastroModule { }
