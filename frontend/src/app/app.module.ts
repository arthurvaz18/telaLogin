import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {DxDrawerModule, DxFormModule, DxListModule, DxSelectBoxModule, DxTextBoxModule} from "devextreme-angular";
import {ComponentModule} from "./component/component.module";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {HomeModule} from "./component/home/home.module";
import {AuthInterceptor} from "./services/interceptors/auth.interceptor";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ComponentModule,
    HomeModule,
    DxTextBoxModule,
    DxSelectBoxModule,
    DxFormModule,
    DxDrawerModule,
    DxListModule,
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
