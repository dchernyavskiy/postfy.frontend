/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { getUserByEmail } from '../fn/users/get-user-by-email';
import { GetUserByEmail$Params } from '../fn/users/get-user-by-email';
import { getUserById } from '../fn/users/get-user-by-id';
import { GetUserById$Params } from '../fn/users/get-user-by-id';
import { getUsers } from '../fn/users/get-users';
import { GetUsers$Params } from '../fn/users/get-users';
import { getUsers$Plain } from '../fn/users/get-users-plain';
import { GetUsers$Plain$Params } from '../fn/users/get-users-plain';
import { GetUsersResponse } from '../models/get-users-response';
import { registerUser } from '../fn/users/register-user';
import { RegisterUser$Params } from '../fn/users/register-user';
import { RegisterUserResponse } from '../models/register-user-response';
import { StatusCodeResult } from '../models/status-code-result';
import { updateUser } from '../fn/users/update-user';
import { UpdateUser$Params } from '../fn/users/update-user';
import { updateUser$Plain } from '../fn/users/update-user-plain';
import { UpdateUser$Plain$Params } from '../fn/users/update-user-plain';
import { updateUserState } from '../fn/users/update-user-state';
import { UpdateUserState$Params } from '../fn/users/update-user-state';

@Injectable({ providedIn: 'root' })
export class UsersService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getUsers()` */
  static readonly GetUsersPath = '/api/v1/identity/users';

  /**
   * Get all users.
   *
   * Get all users
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getUsers$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUsers$Plain$Response(params?: GetUsers$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<GetUsersResponse>> {
    return getUsers$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * Get all users.
   *
   * Get all users
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getUsers$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUsers$Plain(params?: GetUsers$Plain$Params, context?: HttpContext): Observable<GetUsersResponse> {
    return this.getUsers$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<GetUsersResponse>): GetUsersResponse => r.body)
    );
  }

  /**
   * Get all users.
   *
   * Get all users
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getUsers()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUsers$Response(params?: GetUsers$Params, context?: HttpContext): Observable<StrictHttpResponse<GetUsersResponse>> {
    return getUsers(this.http, this.rootUrl, params, context);
  }

  /**
   * Get all users.
   *
   * Get all users
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getUsers$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUsers(params?: GetUsers$Params, context?: HttpContext): Observable<GetUsersResponse> {
    return this.getUsers$Response(params, context).pipe(
      map((r: StrictHttpResponse<GetUsersResponse>): GetUsersResponse => r.body)
    );
  }

  /** Path part for operation `updateUser()` */
  static readonly UpdateUserPath = '/api/v1/identity/users';

  /**
   * UpdateUser.
   *
   * UpdateUser
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateUser$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  updateUser$Plain$Response(params?: UpdateUser$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<StatusCodeResult>> {
    return updateUser$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * UpdateUser.
   *
   * UpdateUser
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateUser$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  updateUser$Plain(params?: UpdateUser$Plain$Params, context?: HttpContext): Observable<StatusCodeResult> {
    return this.updateUser$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<StatusCodeResult>): StatusCodeResult => r.body)
    );
  }

  /**
   * UpdateUser.
   *
   * UpdateUser
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateUser()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  updateUser$Response(params?: UpdateUser$Params, context?: HttpContext): Observable<StrictHttpResponse<StatusCodeResult>> {
    return updateUser(this.http, this.rootUrl, params, context);
  }

  /**
   * UpdateUser.
   *
   * UpdateUser
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateUser$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  updateUser(params?: UpdateUser$Params, context?: HttpContext): Observable<StatusCodeResult> {
    return this.updateUser$Response(params, context).pipe(
      map((r: StrictHttpResponse<StatusCodeResult>): StatusCodeResult => r.body)
    );
  }

  /** Path part for operation `registerUser()` */
  static readonly RegisterUserPath = '/api/v1/identity/users';

  /**
   * Register New User.
   *
   * Register New User.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `registerUser()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  registerUser$Response(params: RegisterUser$Params, context?: HttpContext): Observable<StrictHttpResponse<RegisterUserResponse>> {
    return registerUser(this.http, this.rootUrl, params, context);
  }

  /**
   * Register New User.
   *
   * Register New User.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `registerUser$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  registerUser(params: RegisterUser$Params, context?: HttpContext): Observable<RegisterUserResponse> {
    return this.registerUser$Response(params, context).pipe(
      map((r: StrictHttpResponse<RegisterUserResponse>): RegisterUserResponse => r.body)
    );
  }

  /** Path part for operation `updateUserState()` */
  static readonly UpdateUserStatePath = '/api/v1/identity/users/{userId}/state';

  /**
   * Updating User State.
   *
   * Updating User State
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateUserState()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateUserState$Response(params: UpdateUserState$Params, context?: HttpContext): Observable<StrictHttpResponse<RegisterUserResponse>> {
    return updateUserState(this.http, this.rootUrl, params, context);
  }

  /**
   * Updating User State.
   *
   * Updating User State
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateUserState$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateUserState(params: UpdateUserState$Params, context?: HttpContext): Observable<RegisterUserResponse> {
    return this.updateUserState$Response(params, context).pipe(
      map((r: StrictHttpResponse<RegisterUserResponse>): RegisterUserResponse => r.body)
    );
  }

  /** Path part for operation `getUserById()` */
  static readonly GetUserByIdPath = '/api/v1/identity/users/{userId}';

  /**
   * Getting User by InternalCommandId.
   *
   * Getting User by InternalCommandId
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getUserById()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserById$Response(params: GetUserById$Params, context?: HttpContext): Observable<StrictHttpResponse<RegisterUserResponse>> {
    return getUserById(this.http, this.rootUrl, params, context);
  }

  /**
   * Getting User by InternalCommandId.
   *
   * Getting User by InternalCommandId
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getUserById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserById(params: GetUserById$Params, context?: HttpContext): Observable<RegisterUserResponse> {
    return this.getUserById$Response(params, context).pipe(
      map((r: StrictHttpResponse<RegisterUserResponse>): RegisterUserResponse => r.body)
    );
  }

  /** Path part for operation `getUserByEmail()` */
  static readonly GetUserByEmailPath = '/api/v1/identity/users/by-email/{email}';

  /**
   * Getting User by email.
   *
   * Getting User by email.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getUserByEmail()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserByEmail$Response(params: GetUserByEmail$Params, context?: HttpContext): Observable<StrictHttpResponse<RegisterUserResponse>> {
    return getUserByEmail(this.http, this.rootUrl, params, context);
  }

  /**
   * Getting User by email.
   *
   * Getting User by email.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getUserByEmail$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserByEmail(params: GetUserByEmail$Params, context?: HttpContext): Observable<RegisterUserResponse> {
    return this.getUserByEmail$Response(params, context).pipe(
      map((r: StrictHttpResponse<RegisterUserResponse>): RegisterUserResponse => r.body)
    );
  }

}
