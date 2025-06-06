import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoginComponent} from "./login.component";
import {FormsModule} from "@angular/forms";
import {LoginRoutingModule} from "./login-routing.module";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatButtonModule} from "@angular/material/button";
import {NgxMaskModule} from "ngx-mask";
import {MatInputModule} from "@angular/material/input";



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    LoginRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    NgxMaskModule.forRoot(),
  ],
  exports: [
    LoginComponent
  ]
})
export class LoginModule { }
