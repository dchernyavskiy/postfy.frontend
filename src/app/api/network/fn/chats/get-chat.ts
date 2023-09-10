/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { GetChatResponse } from '../../models/get-chat-response';

export interface GetChat$Params {
  Id?: string;
}

export function getChat(http: HttpClient, rootUrl: string, params?: GetChat$Params, context?: HttpContext): Observable<StrictHttpResponse<GetChatResponse>> {
  const rb = new RequestBuilder(rootUrl, getChat.PATH, 'get');
  if (params) {
    rb.query('Id', params.Id, {"style":"form"});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<GetChatResponse>;
    })
  );
}

getChat.PATH = '/api/v1/network/chats';
