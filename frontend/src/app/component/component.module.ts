import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CadastroComponent } from './cadastro/cadastro.component';
import { LoginComponent } from './login/login.component';
import { InicioComponent } from './inicio/inicio.component';
import { NavbarComponent } from './navbar/navbar.component';

import {
  DxButtonModule,
  DxDrawerModule,
  DxFormModule,
  DxListModule,
  DxMenuModule,
  DxSelectBoxModule,
  DxTextBoxModule,
  DxTileViewModule,
  DxToolbarModule
} from 'devextreme-angular';

@NgModule({
  declarations: [
    CadastroComponent,
    LoginComponent,
    InicioComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    DxTextBoxModule,
    DxSelectBoxModule,
    DxFormModule,
    DxButtonModule,
    DxToolbarModule,
    DxMenuModule,
    DxTileViewModule,
    DxDrawerModule,
    DxListModule
  ],
  exports: [
    CadastroComponent,
    LoginComponent,
    InicioComponent,
    NavbarComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ComponentModule {}
