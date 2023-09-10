/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { RevokeRefreshTokenRequest } from '../../models/revoke-refresh-token-request';
import { StatusCodeProblemDetails } from '../../models/status-code-problem-details';

export interface ApiV1IdentityRevokeRefreshTokenPost$Params {
      body: RevokeRefreshTokenRequest
}

export function apiV1IdentityRevokeRefreshTokenPost(http: HttpClient, rootUrl: string, params: ApiV1IdentityRevokeRefreshTokenPost$Params, context?: HttpContext): Observable<StrictHttpResponse<StatusCodeProblemDetails>> {
  const rb = new RequestBuilder(rootUrl, apiV1IdentityRevokeRefreshTokenPost.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<StatusCodeProblemDetails>;
    })
  );
}

apiV1IdentityRevokeRefreshTokenPost.PATH = '/api/v1/identity/revoke-refresh-token';
