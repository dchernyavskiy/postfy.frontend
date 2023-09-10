/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { GetPostResponse } from '../../models/get-post-response';

export interface GetPost$Plain$Params {
  PostId: string;
}

export function getPost$Plain(http: HttpClient, rootUrl: string, params: GetPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<GetPostResponse>> {
  const rb = new RequestBuilder(rootUrl, getPost$Plain.PATH, 'get');
  if (params) {
    rb.path('PostId', params.PostId, {"style":"simple"});
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<GetPostResponse>;
    })
  );
}

getPost$Plain.PATH = '/api/v1/network/posts/{PostId}';
