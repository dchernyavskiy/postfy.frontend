/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { GetClaimsResponse } from '../../models/get-claims-response';

export interface ApiV1IdentityClaimsGet$Params {
}

export function apiV1IdentityClaimsGet(http: HttpClient, rootUrl: string, params?: ApiV1IdentityClaimsGet$Params, context?: HttpContext): Observable<StrictHttpResponse<GetClaimsResponse>> {
  const rb = new RequestBuilder(rootUrl, apiV1IdentityClaimsGet.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<GetClaimsResponse>;
    })
  );
}

apiV1IdentityClaimsGet.PATH = '/api/v1/identity/claims';
