/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { GetProfileResponse } from '../../models/get-profile-response';

export interface GetProfile$Plain$Params {
  UserId?: string;
}

export function getProfile$Plain(http: HttpClient, rootUrl: string, params?: GetProfile$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<GetProfileResponse>> {
  const rb = new RequestBuilder(rootUrl, getProfile$Plain.PATH, 'get');
  if (params) {
    rb.query('UserId', params.UserId, {"style":"form"});
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<GetProfileResponse>;
    })
  );
}

getProfile$Plain.PATH = '/api/v1/network/users/profile';
