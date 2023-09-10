/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { DeleteChat } from '../../models/delete-chat';
import { StatusCodeResult } from '../../models/status-code-result';

export interface DeleteChat$Plain$Params {
      body?: DeleteChat
}

export function deleteChat$Plain(http: HttpClient, rootUrl: string, params?: DeleteChat$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<StatusCodeResult>> {
  const rb = new RequestBuilder(rootUrl, deleteChat$Plain.PATH, 'delete');
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

deleteChat$Plain.PATH = '/api/v1/network/chats';
