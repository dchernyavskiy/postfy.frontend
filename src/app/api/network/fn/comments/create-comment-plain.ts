/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CreateComment } from '../../models/create-comment';
import { StatusCodeResult } from '../../models/status-code-result';

export interface CreateComment$Plain$Params {
      body?: CreateComment
}

export function createComment$Plain(http: HttpClient, rootUrl: string, params?: CreateComment$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<StatusCodeResult>> {
  const rb = new RequestBuilder(rootUrl, createComment$Plain.PATH, 'post');
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

createComment$Plain.PATH = '/api/v1/network/comments';
