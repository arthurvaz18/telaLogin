import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CadastroComponent} from "./cadastro/cadastro.component";
import {LoginComponent} from "./login/login.component";
import {HomeComponent} from "./home/home.component";
import {FormsModule} from "@angular/forms";
import {ComponentRoutingModule} from "./component.routing.module";
import {DxButtonModule, DxFormModule, DxSelectBoxModule, DxTextBoxModule} from "devextreme-angular";


@NgModule({
  declarations: [
    CadastroComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ComponentRoutingModule,
    DxTextBoxModule,
    DxSelectBoxModule,
    DxFormModule,
    DxButtonModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ComponentModule { }
