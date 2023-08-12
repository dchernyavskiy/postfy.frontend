import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AngularSvgIconModule} from "angular-svg-icon";
import {IDENTITY_API_BASE_URL} from "./api/identity-api";
import {environment} from "../environments/environment";
import {NETWORK_API_BASE_URL} from "./api/network-api";
import {JwtInterceptor} from "./core/interceptor/jwt.interceptor";
import {SharedModule} from "./modules/shared/shared.module";


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularSvgIconModule.forRoot(),
    SharedModule
  ],
  providers: [
    {provide: IDENTITY_API_BASE_URL, useValue: environment.apiUrl},
    {provide: NETWORK_API_BASE_URL, useValue: environment.apiUrl},
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
