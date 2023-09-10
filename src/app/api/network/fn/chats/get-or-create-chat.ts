/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { GetOrCreateChat } from '../../models/get-or-create-chat';
import { GetOrCreateChatResponse } from '../../models/get-or-create-chat-response';

export interface GetOrCreateChat$Params {
      body?: GetOrCreateChat
}

export function getOrCreateChat(http: HttpClient, rootUrl: string, params?: GetOrCreateChat$Params, context?: HttpContext): Observable<StrictHttpResponse<GetOrCreateChatResponse>> {
  const rb = new RequestBuilder(rootUrl, getOrCreateChat.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/*+json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<GetOrCreateChatResponse>;
    })
  );
}

getOrCreateChat.PATH = '/api/v1/network/chats/get-or-create';
