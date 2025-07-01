import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CadastroComponent} from "./cadastro/cadastro.component";
import {LoginComponent} from "./login/login.component";
import {HomeComponent} from "./home/home.component";
import {FormsModule} from "@angular/forms";
import {ComponentRoutingModule} from "./component.routing.module";
import {
  DxButtonModule,
  DxFormModule,
  DxMenuModule,
  DxSelectBoxModule,
  DxTextBoxModule,
  DxToolbarModule
} from "devextreme-angular";
import {InicioComponent} from "./inicio/inicio.component";
import {NavbarComponent} from "./navbar/navbar.component";


@NgModule({
  declarations: [
    CadastroComponent,
    LoginComponent,
    HomeComponent,
    InicioComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ComponentRoutingModule,
    DxTextBoxModule,
    DxSelectBoxModule,
    DxFormModule,
    DxButtonModule,
    DxToolbarModule,
    DxMenuModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ComponentModule { }
