/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { LoginWithGoogleRequest } from '../../models/login-with-google-request';
import { LoginWithGoogleResponse } from '../../models/login-with-google-response';

export interface LoginWithGoogle$Params {
      body: LoginWithGoogleRequest
}

export function loginWithGoogle(http: HttpClient, rootUrl: string, params: LoginWithGoogle$Params, context?: HttpContext): Observable<StrictHttpResponse<LoginWithGoogleResponse>> {
  const rb = new RequestBuilder(rootUrl, loginWithGoogle.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<LoginWithGoogleResponse>;
    })
  );
}

loginWithGoogle.PATH = '/api/v1/identity/login-with-google';
