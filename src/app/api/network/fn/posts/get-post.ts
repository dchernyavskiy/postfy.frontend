/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { GetPostResponse } from '../../models/get-post-response';

export interface GetPost$Params {
  PostId: string;
}

export function getPost(http: HttpClient, rootUrl: string, params: GetPost$Params, context?: HttpContext): Observable<StrictHttpResponse<GetPostResponse>> {
  const rb = new RequestBuilder(rootUrl, getPost.PATH, 'get');
  if (params) {
    rb.path('PostId', params.PostId, {"style":"simple"});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<GetPostResponse>;
    })
  );
}

getPost.PATH = '/api/v1/network/posts/{PostId}';
