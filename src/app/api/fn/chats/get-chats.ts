/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { GetChats } from '../../models/get-chats';
import { GetChatsResponse } from '../../models/get-chats-response';

export interface GetChats$Params {
  request?: GetChats;
}

export function getChats(http: HttpClient, rootUrl: string, params?: GetChats$Params, context?: HttpContext): Observable<StrictHttpResponse<GetChatsResponse>> {
  const rb = new RequestBuilder(rootUrl, getChats.PATH, 'get');
  if (params) {
    rb.query('request', params.request, {"style":"form"});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<GetChatsResponse>;
    })
  );
}

getChats.PATH = '/api/v1/network/chats/get-chats';
