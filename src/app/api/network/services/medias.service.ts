/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { uploadMedia } from '../fn/medias/upload-media';
import { UploadMedia$Params } from '../fn/medias/upload-media';
import { uploadMedia$Plain } from '../fn/medias/upload-media-plain';
import { UploadMedia$Plain$Params } from '../fn/medias/upload-media-plain';
import { UploadMediaResponse } from '../models/upload-media-response';

@Injectable({ providedIn: 'root' })
export class MediasService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `uploadMedia()` */
  static readonly UploadMediaPath = '/api/v1/network/medias';

  /**
   * UploadMedia.
   *
   * UploadMedia
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `uploadMedia$Plain()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  uploadMedia$Plain$Response(params?: UploadMedia$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<UploadMediaResponse>> {
    return uploadMedia$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * UploadMedia.
   *
   * UploadMedia
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `uploadMedia$Plain$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  uploadMedia$Plain(params?: UploadMedia$Plain$Params, context?: HttpContext): Observable<UploadMediaResponse> {
    return this.uploadMedia$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<UploadMediaResponse>): UploadMediaResponse => r.body)
    );
  }

  /**
   * UploadMedia.
   *
   * UploadMedia
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `uploadMedia()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  uploadMedia$Response(params?: UploadMedia$Params, context?: HttpContext): Observable<StrictHttpResponse<UploadMediaResponse>> {
    return uploadMedia(this.http, this.rootUrl, params, context);
  }

  /**
   * UploadMedia.
   *
   * UploadMedia
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `uploadMedia$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  uploadMedia(params?: UploadMedia$Params, context?: HttpContext): Observable<UploadMediaResponse> {
    return this.uploadMedia$Response(params, context).pipe(
      map((r: StrictHttpResponse<UploadMediaResponse>): UploadMediaResponse => r.body)
    );
  }

}
