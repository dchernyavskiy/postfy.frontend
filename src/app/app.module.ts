import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AngularSvgIconModule} from "angular-svg-icon";
import {environment} from "../environments/environment";
import {JwtInterceptor} from "./core/interceptor/jwt.interceptor";
import {SharedModule} from "./modules/shared/shared.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {NetworkApiModule} from "./api/network/network-api.module";
import {IdentityApiModule} from "./api/identity/identity-api.module";


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularSvgIconModule.forRoot(),
    SharedModule,
    BrowserAnimationsModule,
    NetworkApiModule.forRoot({rootUrl: environment.apiUrl}),
    IdentityApiModule.forRoot({rootUrl: environment.apiUrl}),
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
