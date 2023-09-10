/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { GetProfileResponse } from '../../models/get-profile-response';

export interface GetProfile$Params {
  UserId?: string;
}

export function getProfile(http: HttpClient, rootUrl: string, params?: GetProfile$Params, context?: HttpContext): Observable<StrictHttpResponse<GetProfileResponse>> {
  const rb = new RequestBuilder(rootUrl, getProfile.PATH, 'get');
  if (params) {
    rb.query('UserId', params.UserId, {"style":"form"});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<GetProfileResponse>;
    })
  );
}

getProfile.PATH = '/api/v1/network/users/profile';
