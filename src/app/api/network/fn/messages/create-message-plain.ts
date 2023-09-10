/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CreateMessage } from '../../models/create-message';
import { CreateMessageResponse } from '../../models/create-message-response';

export interface CreateMessage$Plain$Params {
      body?: CreateMessage
}

export function createMessage$Plain(http: HttpClient, rootUrl: string, params?: CreateMessage$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<CreateMessageResponse>> {
  const rb = new RequestBuilder(rootUrl, createMessage$Plain.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/*+json');
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<CreateMessageResponse>;
    })
  );
}

createMessage$Plain.PATH = '/api/v1/network/messages';
