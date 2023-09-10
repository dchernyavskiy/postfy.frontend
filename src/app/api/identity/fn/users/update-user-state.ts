/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { RegisterUserResponse } from '../../models/register-user-response';
import { UpdateUserStateRequest } from '../../models/update-user-state-request';

export interface UpdateUserState$Params {
  userId: string;
      body: UpdateUserStateRequest
}

export function updateUserState(http: HttpClient, rootUrl: string, params: UpdateUserState$Params, context?: HttpContext): Observable<StrictHttpResponse<RegisterUserResponse>> {
  const rb = new RequestBuilder(rootUrl, updateUserState.PATH, 'put');
  if (params) {
    rb.path('userId', params.userId, {"style":"simple"});
    rb.body(params.body, 'application/json');
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

updateUserState.PATH = '/api/v1/identity/users/{userId}/state';
