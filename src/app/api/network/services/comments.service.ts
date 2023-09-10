/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { createComment } from '../fn/comments/create-comment';
import { CreateComment$Params } from '../fn/comments/create-comment';
import { createComment$Plain } from '../fn/comments/create-comment-plain';
import { CreateComment$Plain$Params } from '../fn/comments/create-comment-plain';
import { deleteComment } from '../fn/comments/delete-comment';
import { DeleteComment$Params } from '../fn/comments/delete-comment';
import { deleteComment$Plain } from '../fn/comments/delete-comment-plain';
import { DeleteComment$Plain$Params } from '../fn/comments/delete-comment-plain';
import { getCommentsByPostId } from '../fn/comments/get-comments-by-post-id';
import { GetCommentsByPostId$Params } from '../fn/comments/get-comments-by-post-id';
import { getCommentsByPostId$Plain } from '../fn/comments/get-comments-by-post-id-plain';
import { GetCommentsByPostId$Plain$Params } from '../fn/comments/get-comments-by-post-id-plain';
import { GetCommentsByPostIdResponse } from '../models/get-comments-by-post-id-response';
import { StatusCodeResult } from '../models/status-code-result';

@Injectable({ providedIn: 'root' })
export class CommentsService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getCommentsByPostId()` */
  static readonly GetCommentsByPostIdPath = '/api/v1/network/comments';

  /**
   * GetCommentsByPostId.
   *
   * GetCommentsByPostId
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getCommentsByPostId$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCommentsByPostId$Plain$Response(params?: GetCommentsByPostId$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<GetCommentsByPostIdResponse>> {
    return getCommentsByPostId$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * GetCommentsByPostId.
   *
   * GetCommentsByPostId
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getCommentsByPostId$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCommentsByPostId$Plain(params?: GetCommentsByPostId$Plain$Params, context?: HttpContext): Observable<GetCommentsByPostIdResponse> {
    return this.getCommentsByPostId$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<GetCommentsByPostIdResponse>): GetCommentsByPostIdResponse => r.body)
    );
  }

  /**
   * GetCommentsByPostId.
   *
   * GetCommentsByPostId
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getCommentsByPostId()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCommentsByPostId$Response(params?: GetCommentsByPostId$Params, context?: HttpContext): Observable<StrictHttpResponse<GetCommentsByPostIdResponse>> {
    return getCommentsByPostId(this.http, this.rootUrl, params, context);
  }

  /**
   * GetCommentsByPostId.
   *
   * GetCommentsByPostId
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getCommentsByPostId$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCommentsByPostId(params?: GetCommentsByPostId$Params, context?: HttpContext): Observable<GetCommentsByPostIdResponse> {
    return this.getCommentsByPostId$Response(params, context).pipe(
      map((r: StrictHttpResponse<GetCommentsByPostIdResponse>): GetCommentsByPostIdResponse => r.body)
    );
  }

  /** Path part for operation `createComment()` */
  static readonly CreateCommentPath = '/api/v1/network/comments';

  /**
   * CreateComment.
   *
   * CreateComment
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createComment$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  createComment$Plain$Response(params?: CreateComment$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<StatusCodeResult>> {
    return createComment$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * CreateComment.
   *
   * CreateComment
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createComment$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  createComment$Plain(params?: CreateComment$Plain$Params, context?: HttpContext): Observable<StatusCodeResult> {
    return this.createComment$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<StatusCodeResult>): StatusCodeResult => r.body)
    );
  }

  /**
   * CreateComment.
   *
   * CreateComment
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createComment()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  createComment$Response(params?: CreateComment$Params, context?: HttpContext): Observable<StrictHttpResponse<StatusCodeResult>> {
    return createComment(this.http, this.rootUrl, params, context);
  }

  /**
   * CreateComment.
   *
   * CreateComment
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createComment$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  createComment(params?: CreateComment$Params, context?: HttpContext): Observable<StatusCodeResult> {
    return this.createComment$Response(params, context).pipe(
      map((r: StrictHttpResponse<StatusCodeResult>): StatusCodeResult => r.body)
    );
  }

  /** Path part for operation `deleteComment()` */
  static readonly DeleteCommentPath = '/api/v1/network/comments';

  /**
   * DeleteComment.
   *
   * DeleteComment
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteComment$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  deleteComment$Plain$Response(params?: DeleteComment$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<StatusCodeResult>> {
    return deleteComment$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * DeleteComment.
   *
   * DeleteComment
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteComment$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  deleteComment$Plain(params?: DeleteComment$Plain$Params, context?: HttpContext): Observable<StatusCodeResult> {
    return this.deleteComment$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<StatusCodeResult>): StatusCodeResult => r.body)
    );
  }

  /**
   * DeleteComment.
   *
   * DeleteComment
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteComment()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  deleteComment$Response(params?: DeleteComment$Params, context?: HttpContext): Observable<StrictHttpResponse<StatusCodeResult>> {
    return deleteComment(this.http, this.rootUrl, params, context);
  }

  /**
   * DeleteComment.
   *
   * DeleteComment
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteComment$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  deleteComment(params?: DeleteComment$Params, context?: HttpContext): Observable<StatusCodeResult> {
    return this.deleteComment$Response(params, context).pipe(
      map((r: StrictHttpResponse<StatusCodeResult>): StatusCodeResult => r.body)
    );
  }

}
