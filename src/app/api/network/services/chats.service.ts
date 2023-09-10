/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { createChat } from '../fn/chats/create-chat';
import { CreateChat$Params } from '../fn/chats/create-chat';
import { createChat$Plain } from '../fn/chats/create-chat-plain';
import { CreateChat$Plain$Params } from '../fn/chats/create-chat-plain';
import { CreateChatResponse } from '../models/create-chat-response';
import { deleteChat } from '../fn/chats/delete-chat';
import { DeleteChat$Params } from '../fn/chats/delete-chat';
import { deleteChat$Plain } from '../fn/chats/delete-chat-plain';
import { DeleteChat$Plain$Params } from '../fn/chats/delete-chat-plain';
import { getChat } from '../fn/chats/get-chat';
import { GetChat$Params } from '../fn/chats/get-chat';
import { getChat$Plain } from '../fn/chats/get-chat-plain';
import { GetChat$Plain$Params } from '../fn/chats/get-chat-plain';
import { GetChatResponse } from '../models/get-chat-response';
import { getChats } from '../fn/chats/get-chats';
import { GetChats$Params } from '../fn/chats/get-chats';
import { getChats$Plain } from '../fn/chats/get-chats-plain';
import { GetChats$Plain$Params } from '../fn/chats/get-chats-plain';
import { GetChatsResponse } from '../models/get-chats-response';
import { getOrCreateChat } from '../fn/chats/get-or-create-chat';
import { GetOrCreateChat$Params } from '../fn/chats/get-or-create-chat';
import { getOrCreateChat$Plain } from '../fn/chats/get-or-create-chat-plain';
import { GetOrCreateChat$Plain$Params } from '../fn/chats/get-or-create-chat-plain';
import { GetOrCreateChatResponse } from '../models/get-or-create-chat-response';
import { StatusCodeResult } from '../models/status-code-result';

@Injectable({ providedIn: 'root' })
export class ChatsService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getChat()` */
  static readonly GetChatPath = '/api/v1/network/chats';

  /**
   * GetChat.
   *
   * GetChat
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getChat$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  getChat$Plain$Response(params?: GetChat$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<GetChatResponse>> {
    return getChat$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * GetChat.
   *
   * GetChat
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getChat$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getChat$Plain(params?: GetChat$Plain$Params, context?: HttpContext): Observable<GetChatResponse> {
    return this.getChat$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<GetChatResponse>): GetChatResponse => r.body)
    );
  }

  /**
   * GetChat.
   *
   * GetChat
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getChat()` instead.
   *
   * This method doesn't expect any request body.
   */
  getChat$Response(params?: GetChat$Params, context?: HttpContext): Observable<StrictHttpResponse<GetChatResponse>> {
    return getChat(this.http, this.rootUrl, params, context);
  }

  /**
   * GetChat.
   *
   * GetChat
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getChat$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getChat(params?: GetChat$Params, context?: HttpContext): Observable<GetChatResponse> {
    return this.getChat$Response(params, context).pipe(
      map((r: StrictHttpResponse<GetChatResponse>): GetChatResponse => r.body)
    );
  }

  /** Path part for operation `createChat()` */
  static readonly CreateChatPath = '/api/v1/network/chats';

  /**
   * CreateChat.
   *
   * CreateChat
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createChat$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  createChat$Plain$Response(params?: CreateChat$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<CreateChatResponse>> {
    return createChat$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * CreateChat.
   *
   * CreateChat
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createChat$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  createChat$Plain(params?: CreateChat$Plain$Params, context?: HttpContext): Observable<CreateChatResponse> {
    return this.createChat$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<CreateChatResponse>): CreateChatResponse => r.body)
    );
  }

  /**
   * CreateChat.
   *
   * CreateChat
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createChat()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  createChat$Response(params?: CreateChat$Params, context?: HttpContext): Observable<StrictHttpResponse<CreateChatResponse>> {
    return createChat(this.http, this.rootUrl, params, context);
  }

  /**
   * CreateChat.
   *
   * CreateChat
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createChat$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  createChat(params?: CreateChat$Params, context?: HttpContext): Observable<CreateChatResponse> {
    return this.createChat$Response(params, context).pipe(
      map((r: StrictHttpResponse<CreateChatResponse>): CreateChatResponse => r.body)
    );
  }

  /** Path part for operation `deleteChat()` */
  static readonly DeleteChatPath = '/api/v1/network/chats';

  /**
   * DeleteChat.
   *
   * DeleteChat
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteChat$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  deleteChat$Plain$Response(params?: DeleteChat$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<StatusCodeResult>> {
    return deleteChat$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * DeleteChat.
   *
   * DeleteChat
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteChat$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  deleteChat$Plain(params?: DeleteChat$Plain$Params, context?: HttpContext): Observable<StatusCodeResult> {
    return this.deleteChat$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<StatusCodeResult>): StatusCodeResult => r.body)
    );
  }

  /**
   * DeleteChat.
   *
   * DeleteChat
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteChat()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  deleteChat$Response(params?: DeleteChat$Params, context?: HttpContext): Observable<StrictHttpResponse<StatusCodeResult>> {
    return deleteChat(this.http, this.rootUrl, params, context);
  }

  /**
   * DeleteChat.
   *
   * DeleteChat
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteChat$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  deleteChat(params?: DeleteChat$Params, context?: HttpContext): Observable<StatusCodeResult> {
    return this.deleteChat$Response(params, context).pipe(
      map((r: StrictHttpResponse<StatusCodeResult>): StatusCodeResult => r.body)
    );
  }

  /** Path part for operation `getChats()` */
  static readonly GetChatsPath = '/api/v1/network/chats/get-chats';

  /**
   * GetChats.
   *
   * GetChats
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getChats$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  getChats$Plain$Response(params?: GetChats$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<GetChatsResponse>> {
    return getChats$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * GetChats.
   *
   * GetChats
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getChats$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getChats$Plain(params?: GetChats$Plain$Params, context?: HttpContext): Observable<GetChatsResponse> {
    return this.getChats$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<GetChatsResponse>): GetChatsResponse => r.body)
    );
  }

  /**
   * GetChats.
   *
   * GetChats
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getChats()` instead.
   *
   * This method doesn't expect any request body.
   */
  getChats$Response(params?: GetChats$Params, context?: HttpContext): Observable<StrictHttpResponse<GetChatsResponse>> {
    return getChats(this.http, this.rootUrl, params, context);
  }

  /**
   * GetChats.
   *
   * GetChats
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getChats$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getChats(params?: GetChats$Params, context?: HttpContext): Observable<GetChatsResponse> {
    return this.getChats$Response(params, context).pipe(
      map((r: StrictHttpResponse<GetChatsResponse>): GetChatsResponse => r.body)
    );
  }

  /** Path part for operation `getOrCreateChat()` */
  static readonly GetOrCreateChatPath = '/api/v1/network/chats/get-or-create';

  /**
   * GetOrCreateChat.
   *
   * GetOrCreateChat
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getOrCreateChat$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  getOrCreateChat$Plain$Response(params?: GetOrCreateChat$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<GetOrCreateChatResponse>> {
    return getOrCreateChat$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * GetOrCreateChat.
   *
   * GetOrCreateChat
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getOrCreateChat$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  getOrCreateChat$Plain(params?: GetOrCreateChat$Plain$Params, context?: HttpContext): Observable<GetOrCreateChatResponse> {
    return this.getOrCreateChat$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<GetOrCreateChatResponse>): GetOrCreateChatResponse => r.body)
    );
  }

  /**
   * GetOrCreateChat.
   *
   * GetOrCreateChat
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getOrCreateChat()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  getOrCreateChat$Response(params?: GetOrCreateChat$Params, context?: HttpContext): Observable<StrictHttpResponse<GetOrCreateChatResponse>> {
    return getOrCreateChat(this.http, this.rootUrl, params, context);
  }

  /**
   * GetOrCreateChat.
   *
   * GetOrCreateChat
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getOrCreateChat$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  getOrCreateChat(params?: GetOrCreateChat$Params, context?: HttpContext): Observable<GetOrCreateChatResponse> {
    return this.getOrCreateChat$Response(params, context).pipe(
      map((r: StrictHttpResponse<GetOrCreateChatResponse>): GetOrCreateChatResponse => r.body)
    );
  }

}
