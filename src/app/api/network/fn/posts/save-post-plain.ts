/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { SavePost } from '../../models/save-post';
import { SavePostResponse } from '../../models/save-post-response';

export interface SavePost$Plain$Params {
      body?: SavePost
}

export function savePost$Plain(http: HttpClient, rootUrl: string, params?: SavePost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<SavePostResponse>> {
  const rb = new RequestBuilder(rootUrl, savePost$Plain.PATH, 'put');
  if (params) {
    rb.body(params.body, 'application/*+json');
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<SavePostResponse>;
    })
  );
}

savePost$Plain.PATH = '/api/v1/network/posts/save';
