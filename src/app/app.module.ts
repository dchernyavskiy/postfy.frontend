import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {AngularSvgIconModule} from "angular-svg-icon";
import {IDENTITY_API_BASE_URL} from "./api/identity-api";
import {environment} from "../environments/environment";
import {NETWORK_API_BASE_URL} from "./api/network-api";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularSvgIconModule.forRoot()
  ],
  providers: [
    {provide: IDENTITY_API_BASE_URL, useValue: environment.apiUrl},
    {provide: NETWORK_API_BASE_URL, useValue: environment.apiUrl},
  ],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
