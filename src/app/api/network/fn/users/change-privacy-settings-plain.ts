/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ChangePrivacySettings } from '../../models/change-privacy-settings';
import { StatusCodeResult } from '../../models/status-code-result';

export interface ChangePrivacySettings$Plain$Params {
      body?: ChangePrivacySettings
}

export function changePrivacySettings$Plain(http: HttpClient, rootUrl: string, params?: ChangePrivacySettings$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<StatusCodeResult>> {
  const rb = new RequestBuilder(rootUrl, changePrivacySettings$Plain.PATH, 'put');
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

changePrivacySettings$Plain.PATH = '/api/v1/network/users/change-privacy-settings';
