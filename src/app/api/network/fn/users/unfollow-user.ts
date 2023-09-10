/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { StatusCodeResult } from '../../models/status-code-result';
import { UnfollowUser } from '../../models/unfollow-user';

export interface UnfollowUser$Params {
      body?: UnfollowUser
}

export function unfollowUser(http: HttpClient, rootUrl: string, params?: UnfollowUser$Params, context?: HttpContext): Observable<StrictHttpResponse<StatusCodeResult>> {
  const rb = new RequestBuilder(rootUrl, unfollowUser.PATH, 'put');
  if (params) {
    rb.body(params.body, 'application/*+json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<StatusCodeResult>;
    })
  );
}

unfollowUser.PATH = '/api/v1/network/usersunfollow';
