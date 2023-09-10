/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CreateChat } from '../../models/create-chat';
import { CreateChatResponse } from '../../models/create-chat-response';

export interface CreateChat$Plain$Params {
      body?: CreateChat
}

export function createChat$Plain(http: HttpClient, rootUrl: string, params?: CreateChat$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<CreateChatResponse>> {
  const rb = new RequestBuilder(rootUrl, createChat$Plain.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/*+json');
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<CreateChatResponse>;
    })
  );
}

createChat$Plain.PATH = '/api/v1/network/chats';
