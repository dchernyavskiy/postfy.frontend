/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { RegisterUserResponse } from '../../models/register-user-response';

export interface GetUserByEmail$Params {
  email: string;
}

export function getUserByEmail(http: HttpClient, rootUrl: string, params: GetUserByEmail$Params, context?: HttpContext): Observable<StrictHttpResponse<RegisterUserResponse>> {
  const rb = new RequestBuilder(rootUrl, getUserByEmail.PATH, 'get');
  if (params) {
    rb.path('email', params.email, {"style":"simple"});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<RegisterUserResponse>;
    })
  );
}

getUserByEmail.PATH = '/api/v1/identity/users/by-email/{email}';
