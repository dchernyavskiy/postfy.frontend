/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { changeBio } from '../fn/users/change-bio';
import { ChangeBio$Params } from '../fn/users/change-bio';
import { changeBio$Plain } from '../fn/users/change-bio-plain';
import { ChangeBio$Plain$Params } from '../fn/users/change-bio-plain';
import { changeNotificationsSettings } from '../fn/users/change-notifications-settings';
import { ChangeNotificationsSettings$Params } from '../fn/users/change-notifications-settings';
import { changeNotificationsSettings$Plain } from '../fn/users/change-notifications-settings-plain';
import { ChangeNotificationsSettings$Plain$Params } from '../fn/users/change-notifications-settings-plain';
import { changePrivacySettings } from '../fn/users/change-privacy-settings';
import { ChangePrivacySettings$Params } from '../fn/users/change-privacy-settings';
import { changePrivacySettings$Plain } from '../fn/users/change-privacy-settings-plain';
import { ChangePrivacySettings$Plain$Params } from '../fn/users/change-privacy-settings-plain';
import { changeProfileImage } from '../fn/users/change-profile-image';
import { ChangeProfileImage$Params } from '../fn/users/change-profile-image';
import { changeProfileImage$Plain } from '../fn/users/change-profile-image-plain';
import { ChangeProfileImage$Plain$Params } from '../fn/users/change-profile-image-plain';
import { followUser } from '../fn/users/follow-user';
import { FollowUser$Params } from '../fn/users/follow-user';
import { followUser$Plain } from '../fn/users/follow-user-plain';
import { FollowUser$Plain$Params } from '../fn/users/follow-user-plain';
import { getFollowers } from '../fn/users/get-followers';
import { GetFollowers$Params } from '../fn/users/get-followers';
import { getFollowers$Plain } from '../fn/users/get-followers-plain';
import { GetFollowers$Plain$Params } from '../fn/users/get-followers-plain';
import { GetFollowersResponse } from '../models/get-followers-response';
import { getFollowings } from '../fn/users/get-followings';
import { GetFollowings$Params } from '../fn/users/get-followings';
import { getFollowings$Plain } from '../fn/users/get-followings-plain';
import { GetFollowings$Plain$Params } from '../fn/users/get-followings-plain';
import { GetFollowingsResponse } from '../models/get-followings-response';
import { getProfile } from '../fn/users/get-profile';
import { GetProfile$Params } from '../fn/users/get-profile';
import { getProfile$Plain } from '../fn/users/get-profile-plain';
import { GetProfile$Plain$Params } from '../fn/users/get-profile-plain';
import { GetProfileResponse } from '../models/get-profile-response';
import { getSettings } from '../fn/users/get-settings';
import { GetSettings$Params } from '../fn/users/get-settings';
import { getSettings$Plain } from '../fn/users/get-settings-plain';
import { GetSettings$Plain$Params } from '../fn/users/get-settings-plain';
import { GetSettingsResponse } from '../models/get-settings-response';
import { getSuggestions } from '../fn/users/get-suggestions';
import { GetSuggestions$Params } from '../fn/users/get-suggestions';
import { getSuggestions$Plain } from '../fn/users/get-suggestions-plain';
import { GetSuggestions$Plain$Params } from '../fn/users/get-suggestions-plain';
import { GetSuggestionsResponse } from '../models/get-suggestions-response';
import { searchUsers } from '../fn/users/search-users';
import { SearchUsers$Params } from '../fn/users/search-users';
import { searchUsers$Plain } from '../fn/users/search-users-plain';
import { SearchUsers$Plain$Params } from '../fn/users/search-users-plain';
import { SearchUsersResponse } from '../models/search-users-response';
import { StatusCodeResult } from '../models/status-code-result';
import { unfollowUser } from '../fn/users/unfollow-user';
import { UnfollowUser$Params } from '../fn/users/unfollow-user';
import { unfollowUser$Plain } from '../fn/users/unfollow-user-plain';
import { UnfollowUser$Plain$Params } from '../fn/users/unfollow-user-plain';

@Injectable({ providedIn: 'root' })
export class UsersService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `changeBio()` */
  static readonly ChangeBioPath = '/api/v1/network/users/change-bio';

  /**
   * ChangeBio.
   *
   * ChangeBio
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `changeBio$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  changeBio$Plain$Response(params?: ChangeBio$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<StatusCodeResult>> {
    return changeBio$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * ChangeBio.
   *
   * ChangeBio
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `changeBio$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  changeBio$Plain(params?: ChangeBio$Plain$Params, context?: HttpContext): Observable<StatusCodeResult> {
    return this.changeBio$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<StatusCodeResult>): StatusCodeResult => r.body)
    );
  }

  /**
   * ChangeBio.
   *
   * ChangeBio
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `changeBio()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  changeBio$Response(params?: ChangeBio$Params, context?: HttpContext): Observable<StrictHttpResponse<StatusCodeResult>> {
    return changeBio(this.http, this.rootUrl, params, context);
  }

  /**
   * ChangeBio.
   *
   * ChangeBio
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `changeBio$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  changeBio(params?: ChangeBio$Params, context?: HttpContext): Observable<StatusCodeResult> {
    return this.changeBio$Response(params, context).pipe(
      map((r: StrictHttpResponse<StatusCodeResult>): StatusCodeResult => r.body)
    );
  }

  /** Path part for operation `changeNotificationsSettings()` */
  static readonly ChangeNotificationsSettingsPath = '/api/v1/network/users/change-notification-settings';

  /**
   * ChangeNotificationsSettings.
   *
   * ChangeNotificationsSettings
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `changeNotificationsSettings$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  changeNotificationsSettings$Plain$Response(params?: ChangeNotificationsSettings$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<StatusCodeResult>> {
    return changeNotificationsSettings$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * ChangeNotificationsSettings.
   *
   * ChangeNotificationsSettings
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `changeNotificationsSettings$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  changeNotificationsSettings$Plain(params?: ChangeNotificationsSettings$Plain$Params, context?: HttpContext): Observable<StatusCodeResult> {
    return this.changeNotificationsSettings$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<StatusCodeResult>): StatusCodeResult => r.body)
    );
  }

  /**
   * ChangeNotificationsSettings.
   *
   * ChangeNotificationsSettings
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `changeNotificationsSettings()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  changeNotificationsSettings$Response(params?: ChangeNotificationsSettings$Params, context?: HttpContext): Observable<StrictHttpResponse<StatusCodeResult>> {
    return changeNotificationsSettings(this.http, this.rootUrl, params, context);
  }

  /**
   * ChangeNotificationsSettings.
   *
   * ChangeNotificationsSettings
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `changeNotificationsSettings$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  changeNotificationsSettings(params?: ChangeNotificationsSettings$Params, context?: HttpContext): Observable<StatusCodeResult> {
    return this.changeNotificationsSettings$Response(params, context).pipe(
      map((r: StrictHttpResponse<StatusCodeResult>): StatusCodeResult => r.body)
    );
  }

  /** Path part for operation `changePrivacySettings()` */
  static readonly ChangePrivacySettingsPath = '/api/v1/network/users/change-privacy-settings';

  /**
   * ChangePrivacySettings.
   *
   * ChangePrivacySettings
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `changePrivacySettings$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  changePrivacySettings$Plain$Response(params?: ChangePrivacySettings$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<StatusCodeResult>> {
    return changePrivacySettings$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * ChangePrivacySettings.
   *
   * ChangePrivacySettings
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `changePrivacySettings$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  changePrivacySettings$Plain(params?: ChangePrivacySettings$Plain$Params, context?: HttpContext): Observable<StatusCodeResult> {
    return this.changePrivacySettings$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<StatusCodeResult>): StatusCodeResult => r.body)
    );
  }

  /**
   * ChangePrivacySettings.
   *
   * ChangePrivacySettings
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `changePrivacySettings()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  changePrivacySettings$Response(params?: ChangePrivacySettings$Params, context?: HttpContext): Observable<StrictHttpResponse<StatusCodeResult>> {
    return changePrivacySettings(this.http, this.rootUrl, params, context);
  }

  /**
   * ChangePrivacySettings.
   *
   * ChangePrivacySettings
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `changePrivacySettings$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  changePrivacySettings(params?: ChangePrivacySettings$Params, context?: HttpContext): Observable<StatusCodeResult> {
    return this.changePrivacySettings$Response(params, context).pipe(
      map((r: StrictHttpResponse<StatusCodeResult>): StatusCodeResult => r.body)
    );
  }

  /** Path part for operation `changeProfileImage()` */
  static readonly ChangeProfileImagePath = '/api/v1/network/users/change-profile-image';

  /**
   * ChangeProfileImage.
   *
   * ChangeProfileImage
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `changeProfileImage$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  changeProfileImage$Plain$Response(params?: ChangeProfileImage$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<StatusCodeResult>> {
    return changeProfileImage$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * ChangeProfileImage.
   *
   * ChangeProfileImage
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `changeProfileImage$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  changeProfileImage$Plain(params?: ChangeProfileImage$Plain$Params, context?: HttpContext): Observable<StatusCodeResult> {
    return this.changeProfileImage$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<StatusCodeResult>): StatusCodeResult => r.body)
    );
  }

  /**
   * ChangeProfileImage.
   *
   * ChangeProfileImage
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `changeProfileImage()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  changeProfileImage$Response(params?: ChangeProfileImage$Params, context?: HttpContext): Observable<StrictHttpResponse<StatusCodeResult>> {
    return changeProfileImage(this.http, this.rootUrl, params, context);
  }

  /**
   * ChangeProfileImage.
   *
   * ChangeProfileImage
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `changeProfileImage$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  changeProfileImage(params?: ChangeProfileImage$Params, context?: HttpContext): Observable<StatusCodeResult> {
    return this.changeProfileImage$Response(params, context).pipe(
      map((r: StrictHttpResponse<StatusCodeResult>): StatusCodeResult => r.body)
    );
  }

  /** Path part for operation `followUser()` */
  static readonly FollowUserPath = '/api/v1/network/users/follow';

  /**
   * FollowUser.
   *
   * FollowUser
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `followUser$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  followUser$Plain$Response(params?: FollowUser$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<StatusCodeResult>> {
    return followUser$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * FollowUser.
   *
   * FollowUser
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `followUser$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  followUser$Plain(params?: FollowUser$Plain$Params, context?: HttpContext): Observable<StatusCodeResult> {
    return this.followUser$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<StatusCodeResult>): StatusCodeResult => r.body)
    );
  }

  /**
   * FollowUser.
   *
   * FollowUser
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `followUser()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  followUser$Response(params?: FollowUser$Params, context?: HttpContext): Observable<StrictHttpResponse<StatusCodeResult>> {
    return followUser(this.http, this.rootUrl, params, context);
  }

  /**
   * FollowUser.
   *
   * FollowUser
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `followUser$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  followUser(params?: FollowUser$Params, context?: HttpContext): Observable<StatusCodeResult> {
    return this.followUser$Response(params, context).pipe(
      map((r: StrictHttpResponse<StatusCodeResult>): StatusCodeResult => r.body)
    );
  }

  /** Path part for operation `getFollowers()` */
  static readonly GetFollowersPath = '/api/v1/network/users/followers';

  /**
   * GetFollowers.
   *
   * GetFollowers
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getFollowers$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  getFollowers$Plain$Response(params?: GetFollowers$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<GetFollowersResponse>> {
    return getFollowers$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * GetFollowers.
   *
   * GetFollowers
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getFollowers$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getFollowers$Plain(params?: GetFollowers$Plain$Params, context?: HttpContext): Observable<GetFollowersResponse> {
    return this.getFollowers$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<GetFollowersResponse>): GetFollowersResponse => r.body)
    );
  }

  /**
   * GetFollowers.
   *
   * GetFollowers
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getFollowers()` instead.
   *
   * This method doesn't expect any request body.
   */
  getFollowers$Response(params?: GetFollowers$Params, context?: HttpContext): Observable<StrictHttpResponse<GetFollowersResponse>> {
    return getFollowers(this.http, this.rootUrl, params, context);
  }

  /**
   * GetFollowers.
   *
   * GetFollowers
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getFollowers$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getFollowers(params?: GetFollowers$Params, context?: HttpContext): Observable<GetFollowersResponse> {
    return this.getFollowers$Response(params, context).pipe(
      map((r: StrictHttpResponse<GetFollowersResponse>): GetFollowersResponse => r.body)
    );
  }

  /** Path part for operation `getFollowings()` */
  static readonly GetFollowingsPath = '/api/v1/network/users/followings';

  /**
   * GetFollowings.
   *
   * GetFollowings
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getFollowings$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  getFollowings$Plain$Response(params?: GetFollowings$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<GetFollowingsResponse>> {
    return getFollowings$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * GetFollowings.
   *
   * GetFollowings
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getFollowings$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getFollowings$Plain(params?: GetFollowings$Plain$Params, context?: HttpContext): Observable<GetFollowingsResponse> {
    return this.getFollowings$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<GetFollowingsResponse>): GetFollowingsResponse => r.body)
    );
  }

  /**
   * GetFollowings.
   *
   * GetFollowings
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getFollowings()` instead.
   *
   * This method doesn't expect any request body.
   */
  getFollowings$Response(params?: GetFollowings$Params, context?: HttpContext): Observable<StrictHttpResponse<GetFollowingsResponse>> {
    return getFollowings(this.http, this.rootUrl, params, context);
  }

  /**
   * GetFollowings.
   *
   * GetFollowings
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getFollowings$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getFollowings(params?: GetFollowings$Params, context?: HttpContext): Observable<GetFollowingsResponse> {
    return this.getFollowings$Response(params, context).pipe(
      map((r: StrictHttpResponse<GetFollowingsResponse>): GetFollowingsResponse => r.body)
    );
  }

  /** Path part for operation `getProfile()` */
  static readonly GetProfilePath = '/api/v1/network/users/profile';

  /**
   * GetProfile.
   *
   * GetProfile
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getProfile$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  getProfile$Plain$Response(params?: GetProfile$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<GetProfileResponse>> {
    return getProfile$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * GetProfile.
   *
   * GetProfile
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getProfile$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getProfile$Plain(params?: GetProfile$Plain$Params, context?: HttpContext): Observable<GetProfileResponse> {
    return this.getProfile$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<GetProfileResponse>): GetProfileResponse => r.body)
    );
  }

  /**
   * GetProfile.
   *
   * GetProfile
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getProfile()` instead.
   *
   * This method doesn't expect any request body.
   */
  getProfile$Response(params?: GetProfile$Params, context?: HttpContext): Observable<StrictHttpResponse<GetProfileResponse>> {
    return getProfile(this.http, this.rootUrl, params, context);
  }

  /**
   * GetProfile.
   *
   * GetProfile
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getProfile$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getProfile(params?: GetProfile$Params, context?: HttpContext): Observable<GetProfileResponse> {
    return this.getProfile$Response(params, context).pipe(
      map((r: StrictHttpResponse<GetProfileResponse>): GetProfileResponse => r.body)
    );
  }

  /** Path part for operation `getSettings()` */
  static readonly GetSettingsPath = '/api/v1/network/users/settings';

  /**
   * GetSettings.
   *
   * GetSettings
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getSettings$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  getSettings$Plain$Response(params?: GetSettings$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<GetSettingsResponse>> {
    return getSettings$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * GetSettings.
   *
   * GetSettings
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getSettings$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getSettings$Plain(params?: GetSettings$Plain$Params, context?: HttpContext): Observable<GetSettingsResponse> {
    return this.getSettings$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<GetSettingsResponse>): GetSettingsResponse => r.body)
    );
  }

  /**
   * GetSettings.
   *
   * GetSettings
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getSettings()` instead.
   *
   * This method doesn't expect any request body.
   */
  getSettings$Response(params?: GetSettings$Params, context?: HttpContext): Observable<StrictHttpResponse<GetSettingsResponse>> {
    return getSettings(this.http, this.rootUrl, params, context);
  }

  /**
   * GetSettings.
   *
   * GetSettings
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getSettings$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getSettings(params?: GetSettings$Params, context?: HttpContext): Observable<GetSettingsResponse> {
    return this.getSettings$Response(params, context).pipe(
      map((r: StrictHttpResponse<GetSettingsResponse>): GetSettingsResponse => r.body)
    );
  }

  /** Path part for operation `getSuggestions()` */
  static readonly GetSuggestionsPath = '/api/v1/network/users/suggestions';

  /**
   * GetSuggestions.
   *
   * GetSuggestions
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getSuggestions$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  getSuggestions$Plain$Response(params?: GetSuggestions$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<GetSuggestionsResponse>> {
    return getSuggestions$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * GetSuggestions.
   *
   * GetSuggestions
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getSuggestions$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getSuggestions$Plain(params?: GetSuggestions$Plain$Params, context?: HttpContext): Observable<GetSuggestionsResponse> {
    return this.getSuggestions$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<GetSuggestionsResponse>): GetSuggestionsResponse => r.body)
    );
  }

  /**
   * GetSuggestions.
   *
   * GetSuggestions
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getSuggestions()` instead.
   *
   * This method doesn't expect any request body.
   */
  getSuggestions$Response(params?: GetSuggestions$Params, context?: HttpContext): Observable<StrictHttpResponse<GetSuggestionsResponse>> {
    return getSuggestions(this.http, this.rootUrl, params, context);
  }

  /**
   * GetSuggestions.
   *
   * GetSuggestions
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getSuggestions$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getSuggestions(params?: GetSuggestions$Params, context?: HttpContext): Observable<GetSuggestionsResponse> {
    return this.getSuggestions$Response(params, context).pipe(
      map((r: StrictHttpResponse<GetSuggestionsResponse>): GetSuggestionsResponse => r.body)
    );
  }

  /** Path part for operation `searchUsers()` */
  static readonly SearchUsersPath = '/api/v1/network/users/search';

  /**
   * SearchUsers.
   *
   * SearchUsers
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `searchUsers$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  searchUsers$Plain$Response(params?: SearchUsers$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<SearchUsersResponse>> {
    return searchUsers$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * SearchUsers.
   *
   * SearchUsers
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `searchUsers$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  searchUsers$Plain(params?: SearchUsers$Plain$Params, context?: HttpContext): Observable<SearchUsersResponse> {
    return this.searchUsers$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<SearchUsersResponse>): SearchUsersResponse => r.body)
    );
  }

  /**
   * SearchUsers.
   *
   * SearchUsers
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `searchUsers()` instead.
   *
   * This method doesn't expect any request body.
   */
  searchUsers$Response(params?: SearchUsers$Params, context?: HttpContext): Observable<StrictHttpResponse<SearchUsersResponse>> {
    return searchUsers(this.http, this.rootUrl, params, context);
  }

  /**
   * SearchUsers.
   *
   * SearchUsers
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `searchUsers$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  searchUsers(params?: SearchUsers$Params, context?: HttpContext): Observable<SearchUsersResponse> {
    return this.searchUsers$Response(params, context).pipe(
      map((r: StrictHttpResponse<SearchUsersResponse>): SearchUsersResponse => r.body)
    );
  }

  /** Path part for operation `unfollowUser()` */
  static readonly UnfollowUserPath = '/api/v1/network/usersunfollow';

  /**
   * UnfollowUser.
   *
   * UnfollowUser
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `unfollowUser$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  unfollowUser$Plain$Response(params?: UnfollowUser$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<StatusCodeResult>> {
    return unfollowUser$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * UnfollowUser.
   *
   * UnfollowUser
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `unfollowUser$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  unfollowUser$Plain(params?: UnfollowUser$Plain$Params, context?: HttpContext): Observable<StatusCodeResult> {
    return this.unfollowUser$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<StatusCodeResult>): StatusCodeResult => r.body)
    );
  }

  /**
   * UnfollowUser.
   *
   * UnfollowUser
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `unfollowUser()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  unfollowUser$Response(params?: UnfollowUser$Params, context?: HttpContext): Observable<StrictHttpResponse<StatusCodeResult>> {
    return unfollowUser(this.http, this.rootUrl, params, context);
  }

  /**
   * UnfollowUser.
   *
   * UnfollowUser
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `unfollowUser$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  unfollowUser(params?: UnfollowUser$Params, context?: HttpContext): Observable<StatusCodeResult> {
    return this.unfollowUser$Response(params, context).pipe(
      map((r: StrictHttpResponse<StatusCodeResult>): StatusCodeResult => r.body)
    );
  }

}
