/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { createMessage } from '../fn/messages/create-message';
import { CreateMessage$Params } from '../fn/messages/create-message';
import { createMessage$Plain } from '../fn/messages/create-message-plain';
import { CreateMessage$Plain$Params } from '../fn/messages/create-message-plain';
import { CreateMessageResponse } from '../models/create-message-response';
import { deleteMessage } from '../fn/messages/delete-message';
import { DeleteMessage$Params } from '../fn/messages/delete-message';
import { deleteMessage$Plain } from '../fn/messages/delete-message-plain';
import { DeleteMessage$Plain$Params } from '../fn/messages/delete-message-plain';
import { StatusCodeResult } from '../models/status-code-result';

@Injectable({ providedIn: 'root' })
export class MessagesService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `createMessage()` */
  static readonly CreateMessagePath = '/api/v1/network/messages';

  /**
   * CreateMessage.
   *
   * CreateMessage
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createMessage$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  createMessage$Plain$Response(params?: CreateMessage$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<CreateMessageResponse>> {
    return createMessage$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * CreateMessage.
   *
   * CreateMessage
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createMessage$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  createMessage$Plain(params?: CreateMessage$Plain$Params, context?: HttpContext): Observable<CreateMessageResponse> {
    return this.createMessage$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<CreateMessageResponse>): CreateMessageResponse => r.body)
    );
  }

  /**
   * CreateMessage.
   *
   * CreateMessage
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createMessage()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  createMessage$Response(params?: CreateMessage$Params, context?: HttpContext): Observable<StrictHttpResponse<CreateMessageResponse>> {
    return createMessage(this.http, this.rootUrl, params, context);
  }

  /**
   * CreateMessage.
   *
   * CreateMessage
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createMessage$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  createMessage(params?: CreateMessage$Params, context?: HttpContext): Observable<CreateMessageResponse> {
    return this.createMessage$Response(params, context).pipe(
      map((r: StrictHttpResponse<CreateMessageResponse>): CreateMessageResponse => r.body)
    );
  }

  /** Path part for operation `deleteMessage()` */
  static readonly DeleteMessagePath = '/api/v1/network/messages';

  /**
   * DeleteMessage.
   *
   * DeleteMessage
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteMessage$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  deleteMessage$Plain$Response(params?: DeleteMessage$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<StatusCodeResult>> {
    return deleteMessage$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * DeleteMessage.
   *
   * DeleteMessage
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteMessage$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  deleteMessage$Plain(params?: DeleteMessage$Plain$Params, context?: HttpContext): Observable<StatusCodeResult> {
    return this.deleteMessage$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<StatusCodeResult>): StatusCodeResult => r.body)
    );
  }

  /**
   * DeleteMessage.
   *
   * DeleteMessage
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteMessage()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  deleteMessage$Response(params?: DeleteMessage$Params, context?: HttpContext): Observable<StrictHttpResponse<StatusCodeResult>> {
    return deleteMessage(this.http, this.rootUrl, params, context);
  }

  /**
   * DeleteMessage.
   *
   * DeleteMessage
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteMessage$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  deleteMessage(params?: DeleteMessage$Params, context?: HttpContext): Observable<StatusCodeResult> {
    return this.deleteMessage$Response(params, context).pipe(
      map((r: StrictHttpResponse<StatusCodeResult>): StatusCodeResult => r.body)
    );
  }

}
