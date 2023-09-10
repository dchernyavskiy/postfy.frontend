/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { RegisterUserResponse } from '../../models/register-user-response';

export interface GetUserById$Params {
  userId: string;
}

export function getUserById(http: HttpClient, rootUrl: string, params: GetUserById$Params, context?: HttpContext): Observable<StrictHttpResponse<RegisterUserResponse>> {
  const rb = new RequestBuilder(rootUrl, getUserById.PATH, 'get');
  if (params) {
    rb.path('userId', params.userId, {"style":"simple"});
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

getUserById.PATH = '/api/v1/identity/users/{userId}';
