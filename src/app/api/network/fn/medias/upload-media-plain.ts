/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { UploadMediaResponse } from '../../models/upload-media-response';

export interface UploadMedia$Plain$Params {
      body?: {
'files'?: Array<Blob>;
}
}

export function uploadMedia$Plain(http: HttpClient, rootUrl: string, params?: UploadMedia$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<UploadMediaResponse>> {
  const rb = new RequestBuilder(rootUrl, uploadMedia$Plain.PATH, 'post');
  if (params) {
    rb.body(params.body, 'multipart/form-data');
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<UploadMediaResponse>;
    })
  );
}

uploadMedia$Plain.PATH = '/api/v1/network/medias';
