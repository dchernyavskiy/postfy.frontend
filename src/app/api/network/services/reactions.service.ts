/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { likePost } from '../fn/reactions/like-post';
import { LikePost$Params } from '../fn/reactions/like-post';
import { likePost$Plain } from '../fn/reactions/like-post-plain';
import { LikePost$Plain$Params } from '../fn/reactions/like-post-plain';
import { StatusCodeResult } from '../models/status-code-result';

@Injectable({ providedIn: 'root' })
export class ReactionsService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `likePost()` */
  static readonly LikePostPath = '/api/v1/network/reactions';

  /**
   * LikePost.
   *
   * LikePost
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `likePost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  likePost$Plain$Response(params?: LikePost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<StatusCodeResult>> {
    return likePost$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * LikePost.
   *
   * LikePost
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `likePost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  likePost$Plain(params?: LikePost$Plain$Params, context?: HttpContext): Observable<StatusCodeResult> {
    return this.likePost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<StatusCodeResult>): StatusCodeResult => r.body)
    );
  }

  /**
   * LikePost.
   *
   * LikePost
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `likePost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  likePost$Response(params?: LikePost$Params, context?: HttpContext): Observable<StrictHttpResponse<StatusCodeResult>> {
    return likePost(this.http, this.rootUrl, params, context);
  }

  /**
   * LikePost.
   *
   * LikePost
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `likePost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  likePost(params?: LikePost$Params, context?: HttpContext): Observable<StatusCodeResult> {
    return this.likePost$Response(params, context).pipe(
      map((r: StrictHttpResponse<StatusCodeResult>): StatusCodeResult => r.body)
    );
  }

}
