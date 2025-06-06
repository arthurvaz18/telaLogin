import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from "@angular/forms";
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {HttpClientModule} from "@angular/common/http";
import {MatInputModule} from "@angular/material/input";

import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from '@angular/material/form-field';
import {NgxMaskModule} from "ngx-mask";
import {CadastroModule} from "./components/cadastro/cadastro.module";
import {LoginModule} from "./components/login/login.module";

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    NgxMaskModule.forRoot(),
    CadastroModule,
    LoginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
