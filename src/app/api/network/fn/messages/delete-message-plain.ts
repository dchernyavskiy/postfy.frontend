/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { DeleteMessage } from '../../models/delete-message';
import { StatusCodeResult } from '../../models/status-code-result';

export interface DeleteMessage$Plain$Params {
      body?: DeleteMessage
}

export function deleteMessage$Plain(http: HttpClient, rootUrl: string, params?: DeleteMessage$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<StatusCodeResult>> {
  const rb = new RequestBuilder(rootUrl, deleteMessage$Plain.PATH, 'delete');
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

deleteMessage$Plain.PATH = '/api/v1/network/messages';
