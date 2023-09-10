/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CreatePostResponse } from '../../models/create-post-response';

export interface CreatePost$Plain$Params {
      body?: {
'Caption'?: string;
'Files'?: Array<Blob>;
}
}

export function createPost$Plain(http: HttpClient, rootUrl: string, params?: CreatePost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<CreatePostResponse>> {
  const rb = new RequestBuilder(rootUrl, createPost$Plain.PATH, 'post');
  if (params) {
    rb.body(params.body, 'multipart/form-data');
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<CreatePostResponse>;
    })
  );
}

createPost$Plain.PATH = '/api/v1/network/posts';
