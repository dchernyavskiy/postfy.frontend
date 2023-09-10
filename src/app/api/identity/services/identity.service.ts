/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { apiV1IdentityClaimsGet } from '../fn/identity/api-v-1-identity-claims-get';
import { ApiV1IdentityClaimsGet$Params } from '../fn/identity/api-v-1-identity-claims-get';
import { apiV1IdentityRevokeRefreshTokenPost } from '../fn/identity/api-v-1-identity-revoke-refresh-token-post';
import { ApiV1IdentityRevokeRefreshTokenPost$Params } from '../fn/identity/api-v-1-identity-revoke-refresh-token-post';
import { GetClaimsResponse } from '../models/get-claims-response';
import { login } from '../fn/identity/login';
import { Login$Params } from '../fn/identity/login';
import { LoginResponse } from '../models/login-response';
import { loginWithGoogle } from '../fn/identity/login-with-google';
import { LoginWithGoogle$Params } from '../fn/identity/login-with-google';
import { LoginWithGoogleResponse } from '../models/login-with-google-response';
import { logout } from '../fn/identity/logout';
import { Logout$Params } from '../fn/identity/logout';
import { refreshToken } from '../fn/identity/refresh-token';
import { RefreshToken$Params } from '../fn/identity/refresh-token';
import { refreshToken$Plain } from '../fn/identity/refresh-token-plain';
import { RefreshToken$Plain$Params } from '../fn/identity/refresh-token-plain';
import { RefreshTokenResponse } from '../models/refresh-token-response';
import { revokeAccessToken } from '../fn/identity/revoke-access-token';
import { RevokeAccessToken$Params } from '../fn/identity/revoke-access-token';
import { sendEmailVerificationCode } from '../fn/identity/send-email-verification-code';
import { SendEmailVerificationCode$Params } from '../fn/identity/send-email-verification-code';
import { StatusCodeProblemDetails } from '../models/status-code-problem-details';
import { verifyEmail } from '../fn/identity/verify-email';
import { VerifyEmail$Params } from '../fn/identity/verify-email';

@Injectable({ providedIn: 'root' })
export class IdentityService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `login()` */
  static readonly LoginPath = '/api/v1/identity/login';

  /**
   * Login User.
   *
   * Login User
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `login()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  login$Response(params: Login$Params, context?: HttpContext): Observable<StrictHttpResponse<LoginResponse>> {
    return login(this.http, this.rootUrl, params, context);
  }

  /**
   * Login User.
   *
   * Login User
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `login$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  login(params: Login$Params, context?: HttpContext): Observable<LoginResponse> {
    return this.login$Response(params, context).pipe(
      map((r: StrictHttpResponse<LoginResponse>): LoginResponse => r.body)
    );
  }

  /** Path part for operation `loginWithGoogle()` */
  static readonly LoginWithGooglePath = '/api/v1/identity/login-with-google';

  /**
   * Login User With Google.
   *
   * Login User With Google
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `loginWithGoogle()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  loginWithGoogle$Response(params: LoginWithGoogle$Params, context?: HttpContext): Observable<StrictHttpResponse<LoginWithGoogleResponse>> {
    return loginWithGoogle(this.http, this.rootUrl, params, context);
  }

  /**
   * Login User With Google.
   *
   * Login User With Google
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `loginWithGoogle$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  loginWithGoogle(params: LoginWithGoogle$Params, context?: HttpContext): Observable<LoginWithGoogleResponse> {
    return this.loginWithGoogle$Response(params, context).pipe(
      map((r: StrictHttpResponse<LoginWithGoogleResponse>): LoginWithGoogleResponse => r.body)
    );
  }

  /** Path part for operation `logout()` */
  static readonly LogoutPath = '/api/v1/identity/logout';

  /**
   * Logout User.
   *
   * Logout User
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `logout()` instead.
   *
   * This method doesn't expect any request body.
   */
  logout$Response(params?: Logout$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return logout(this.http, this.rootUrl, params, context);
  }

  /**
   * Logout User.
   *
   * Logout User
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `logout$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  logout(params?: Logout$Params, context?: HttpContext): Observable<void> {
    return this.logout$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `sendEmailVerificationCode()` */
  static readonly SendEmailVerificationCodePath = '/api/v1/identity/send-email-verification-code';

  /**
   * Sending Email Verification Code.
   *
   * Sending Email Verification Code.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `sendEmailVerificationCode()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  sendEmailVerificationCode$Response(params: SendEmailVerificationCode$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return sendEmailVerificationCode(this.http, this.rootUrl, params, context);
  }

  /**
   * Sending Email Verification Code.
   *
   * Sending Email Verification Code.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `sendEmailVerificationCode$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  sendEmailVerificationCode(params: SendEmailVerificationCode$Params, context?: HttpContext): Observable<void> {
    return this.sendEmailVerificationCode$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `verifyEmail()` */
  static readonly VerifyEmailPath = '/api/v1/identity/verify-email';

  /**
   * Verifying Email.
   *
   * Verifying Email
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `verifyEmail()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  verifyEmail$Response(params: VerifyEmail$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return verifyEmail(this.http, this.rootUrl, params, context);
  }

  /**
   * Verifying Email.
   *
   * Verifying Email
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `verifyEmail$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  verifyEmail(params: VerifyEmail$Params, context?: HttpContext): Observable<void> {
    return this.verifyEmail$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiV1IdentityRevokeRefreshTokenPost()` */
  static readonly ApiV1IdentityRevokeRefreshTokenPostPath = '/api/v1/identity/revoke-refresh-token';

  /**
   * Revoking Refresh Token.
   *
   * Revoking Refresh Token
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiV1IdentityRevokeRefreshTokenPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  apiV1IdentityRevokeRefreshTokenPost$Response(params: ApiV1IdentityRevokeRefreshTokenPost$Params, context?: HttpContext): Observable<StrictHttpResponse<StatusCodeProblemDetails>> {
    return apiV1IdentityRevokeRefreshTokenPost(this.http, this.rootUrl, params, context);
  }

  /**
   * Revoking Refresh Token.
   *
   * Revoking Refresh Token
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiV1IdentityRevokeRefreshTokenPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  apiV1IdentityRevokeRefreshTokenPost(params: ApiV1IdentityRevokeRefreshTokenPost$Params, context?: HttpContext): Observable<StatusCodeProblemDetails> {
    return this.apiV1IdentityRevokeRefreshTokenPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<StatusCodeProblemDetails>): StatusCodeProblemDetails => r.body)
    );
  }

  /** Path part for operation `revokeAccessToken()` */
  static readonly RevokeAccessTokenPath = '/api/v1/identity/revoke-token';

  /**
   * Revoking Token.
   *
   * Revoking Current User Access Token From the Header.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `revokeAccessToken()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  revokeAccessToken$Response(params?: RevokeAccessToken$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return revokeAccessToken(this.http, this.rootUrl, params, context);
  }

  /**
   * Revoking Token.
   *
   * Revoking Current User Access Token From the Header.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `revokeAccessToken$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  revokeAccessToken(params?: RevokeAccessToken$Params, context?: HttpContext): Observable<void> {
    return this.revokeAccessToken$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiV1IdentityClaimsGet()` */
  static readonly ApiV1IdentityClaimsGetPath = '/api/v1/identity/claims';

  /**
   * Getting User Claims.
   *
   * Getting User Claims
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiV1IdentityClaimsGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiV1IdentityClaimsGet$Response(params?: ApiV1IdentityClaimsGet$Params, context?: HttpContext): Observable<StrictHttpResponse<GetClaimsResponse>> {
    return apiV1IdentityClaimsGet(this.http, this.rootUrl, params, context);
  }

  /**
   * Getting User Claims.
   *
   * Getting User Claims
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiV1IdentityClaimsGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiV1IdentityClaimsGet(params?: ApiV1IdentityClaimsGet$Params, context?: HttpContext): Observable<GetClaimsResponse> {
    return this.apiV1IdentityClaimsGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<GetClaimsResponse>): GetClaimsResponse => r.body)
    );
  }

  /** Path part for operation `refreshToken()` */
  static readonly RefreshTokenPath = '/api/v1/identity/refresh-token';

  /**
   * RefreshToken.
   *
   * RefreshToken
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `refreshToken$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  refreshToken$Plain$Response(params?: RefreshToken$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<RefreshTokenResponse>> {
    return refreshToken$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * RefreshToken.
   *
   * RefreshToken
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `refreshToken$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  refreshToken$Plain(params?: RefreshToken$Plain$Params, context?: HttpContext): Observable<RefreshTokenResponse> {
    return this.refreshToken$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<RefreshTokenResponse>): RefreshTokenResponse => r.body)
    );
  }

  /**
   * RefreshToken.
   *
   * RefreshToken
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `refreshToken()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  refreshToken$Response(params?: RefreshToken$Params, context?: HttpContext): Observable<StrictHttpResponse<RefreshTokenResponse>> {
    return refreshToken(this.http, this.rootUrl, params, context);
  }

  /**
   * RefreshToken.
   *
   * RefreshToken
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `refreshToken$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  refreshToken(params?: RefreshToken$Params, context?: HttpContext): Observable<RefreshTokenResponse> {
    return this.refreshToken$Response(params, context).pipe(
      map((r: StrictHttpResponse<RefreshTokenResponse>): RefreshTokenResponse => r.body)
    );
  }

}
