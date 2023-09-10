/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { GetCommentsByPostIdResponse } from '../../models/get-comments-by-post-id-response';

export interface GetCommentsByPostId$Plain$Params {
  PostId?: string;
}

export function getCommentsByPostId$Plain(http: HttpClient, rootUrl: string, params?: GetCommentsByPostId$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<GetCommentsByPostIdResponse>> {
  const rb = new RequestBuilder(rootUrl, getCommentsByPostId$Plain.PATH, 'get');
  if (params) {
    rb.query('PostId', params.PostId, {"style":"form"});
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<GetCommentsByPostIdResponse>;
    })
  );
}

getCommentsByPostId$Plain.PATH = '/api/v1/network/comments';
