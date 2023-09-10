/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { GetCommentsByPostIdResponse } from '../../models/get-comments-by-post-id-response';

export interface GetCommentsByPostId$Params {
  PostId?: string;
}

export function getCommentsByPostId(http: HttpClient, rootUrl: string, params?: GetCommentsByPostId$Params, context?: HttpContext): Observable<StrictHttpResponse<GetCommentsByPostIdResponse>> {
  const rb = new RequestBuilder(rootUrl, getCommentsByPostId.PATH, 'get');
  if (params) {
    rb.query('PostId', params.PostId, {"style":"form"});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<GetCommentsByPostIdResponse>;
    })
  );
}

getCommentsByPostId.PATH = '/api/v1/network/comments';
