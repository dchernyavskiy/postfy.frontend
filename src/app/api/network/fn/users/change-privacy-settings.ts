/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ChangePrivacySettings } from '../../models/change-privacy-settings';
import { StatusCodeResult } from '../../models/status-code-result';

export interface ChangePrivacySettings$Params {
      body?: ChangePrivacySettings
}

export function changePrivacySettings(http: HttpClient, rootUrl: string, params?: ChangePrivacySettings$Params, context?: HttpContext): Observable<StrictHttpResponse<StatusCodeResult>> {
  const rb = new RequestBuilder(rootUrl, changePrivacySettings.PATH, 'put');
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

changePrivacySettings.PATH = '/api/v1/network/users/change-privacy-settings';
