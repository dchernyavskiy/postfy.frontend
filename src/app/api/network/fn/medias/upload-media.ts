/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { UploadMediaResponse } from '../../models/upload-media-response';

export interface UploadMedia$Params {
      body?: {
'files'?: Array<Blob>;
}
}

export function uploadMedia(http: HttpClient, rootUrl: string, params?: UploadMedia$Params, context?: HttpContext): Observable<StrictHttpResponse<UploadMediaResponse>> {
  const rb = new RequestBuilder(rootUrl, uploadMedia.PATH, 'post');
  if (params) {
    rb.body(params.body, 'multipart/form-data');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<UploadMediaResponse>;
    })
  );
}

uploadMedia.PATH = '/api/v1/network/medias';
