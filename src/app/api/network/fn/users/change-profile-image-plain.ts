/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ChangeProfileImage } from '../../models/change-profile-image';
import { StatusCodeResult } from '../../models/status-code-result';

export interface ChangeProfileImage$Plain$Params {
      body?: ChangeProfileImage
}

export function changeProfileImage$Plain(http: HttpClient, rootUrl: string, params?: ChangeProfileImage$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<StatusCodeResult>> {
  const rb = new RequestBuilder(rootUrl, changeProfileImage$Plain.PATH, 'put');
  if (params) {
    rb.body(params.body, 'application/*+json');
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<StatusCodeResult>;
    })
  );
}

changeProfileImage$Plain.PATH = '/api/v1/network/users/change-profile-image';
