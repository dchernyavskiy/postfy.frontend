/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { createPost } from '../fn/posts/create-post';
import { CreatePost$Params } from '../fn/posts/create-post';
import { createPost$Plain } from '../fn/posts/create-post-plain';
import { CreatePost$Plain$Params } from '../fn/posts/create-post-plain';
import { CreatePostResponse } from '../models/create-post-response';
import { deletePost } from '../fn/posts/delete-post';
import { DeletePost$Params } from '../fn/posts/delete-post';
import { deletePost$Plain } from '../fn/posts/delete-post-plain';
import { DeletePost$Plain$Params } from '../fn/posts/delete-post-plain';
import { explorePosts } from '../fn/posts/explore-posts';
import { ExplorePosts$Params } from '../fn/posts/explore-posts';
import { explorePosts$Plain } from '../fn/posts/explore-posts-plain';
import { ExplorePosts$Plain$Params } from '../fn/posts/explore-posts-plain';
import { ExplorePostsResponse } from '../models/explore-posts-response';
import { getFeed } from '../fn/posts/get-feed';
import { GetFeed$Params } from '../fn/posts/get-feed';
import { getFeed$Plain } from '../fn/posts/get-feed-plain';
import { GetFeed$Plain$Params } from '../fn/posts/get-feed-plain';
import { GetFeedResponse } from '../models/get-feed-response';
import { getPost } from '../fn/posts/get-post';
import { GetPost$Params } from '../fn/posts/get-post';
import { getPost$Plain } from '../fn/posts/get-post-plain';
import { GetPost$Plain$Params } from '../fn/posts/get-post-plain';
import { GetPostResponse } from '../models/get-post-response';
import { getPosts } from '../fn/posts/get-posts';
import { GetPosts$Params } from '../fn/posts/get-posts';
import { getPosts$Plain } from '../fn/posts/get-posts-plain';
import { GetPosts$Plain$Params } from '../fn/posts/get-posts-plain';
import { GetPostsResponse } from '../models/get-posts-response';
import { getSavedPosts } from '../fn/posts/get-saved-posts';
import { GetSavedPosts$Params } from '../fn/posts/get-saved-posts';
import { getSavedPosts$Plain } from '../fn/posts/get-saved-posts-plain';
import { GetSavedPosts$Plain$Params } from '../fn/posts/get-saved-posts-plain';
import { GetSavedPostsResponse } from '../models/get-saved-posts-response';
import { savePost } from '../fn/posts/save-post';
import { SavePost$Params } from '../fn/posts/save-post';
import { savePost$Plain } from '../fn/posts/save-post-plain';
import { SavePost$Plain$Params } from '../fn/posts/save-post-plain';
import { SavePostResponse } from '../models/save-post-response';
import { StatusCodeResult } from '../models/status-code-result';
import { updatePost } from '../fn/posts/update-post';
import { UpdatePost$Params } from '../fn/posts/update-post';
import { updatePost$Plain } from '../fn/posts/update-post-plain';
import { UpdatePost$Plain$Params } from '../fn/posts/update-post-plain';

@Injectable({ providedIn: 'root' })
export class PostsService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getPosts()` */
  static readonly GetPostsPath = '/api/v1/network/posts';

  /**
   * GetPosts.
   *
   * GetPosts
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getPosts$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  getPosts$Plain$Response(params?: GetPosts$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<GetPostsResponse>> {
    return getPosts$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * GetPosts.
   *
   * GetPosts
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getPosts$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getPosts$Plain(params?: GetPosts$Plain$Params, context?: HttpContext): Observable<GetPostsResponse> {
    return this.getPosts$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<GetPostsResponse>): GetPostsResponse => r.body)
    );
  }

  /**
   * GetPosts.
   *
   * GetPosts
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getPosts()` instead.
   *
   * This method doesn't expect any request body.
   */
  getPosts$Response(params?: GetPosts$Params, context?: HttpContext): Observable<StrictHttpResponse<GetPostsResponse>> {
    return getPosts(this.http, this.rootUrl, params, context);
  }

  /**
   * GetPosts.
   *
   * GetPosts
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getPosts$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getPosts(params?: GetPosts$Params, context?: HttpContext): Observable<GetPostsResponse> {
    return this.getPosts$Response(params, context).pipe(
      map((r: StrictHttpResponse<GetPostsResponse>): GetPostsResponse => r.body)
    );
  }

  /** Path part for operation `updatePost()` */
  static readonly UpdatePostPath = '/api/v1/network/posts';

  /**
   * UpdatePost.
   *
   * UpdatePost
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updatePost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  updatePost$Plain$Response(params?: UpdatePost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<StatusCodeResult>> {
    return updatePost$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * UpdatePost.
   *
   * UpdatePost
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updatePost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  updatePost$Plain(params?: UpdatePost$Plain$Params, context?: HttpContext): Observable<StatusCodeResult> {
    return this.updatePost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<StatusCodeResult>): StatusCodeResult => r.body)
    );
  }

  /**
   * UpdatePost.
   *
   * UpdatePost
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updatePost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  updatePost$Response(params?: UpdatePost$Params, context?: HttpContext): Observable<StrictHttpResponse<StatusCodeResult>> {
    return updatePost(this.http, this.rootUrl, params, context);
  }

  /**
   * UpdatePost.
   *
   * UpdatePost
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updatePost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  updatePost(params?: UpdatePost$Params, context?: HttpContext): Observable<StatusCodeResult> {
    return this.updatePost$Response(params, context).pipe(
      map((r: StrictHttpResponse<StatusCodeResult>): StatusCodeResult => r.body)
    );
  }

  /** Path part for operation `createPost()` */
  static readonly CreatePostPath = '/api/v1/network/posts';

  /**
   * CreatePost.
   *
   * CreatePost
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPost$Plain()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  createPost$Plain$Response(params?: CreatePost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<CreatePostResponse>> {
    return createPost$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * CreatePost.
   *
   * CreatePost
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPost$Plain$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  createPost$Plain(params?: CreatePost$Plain$Params, context?: HttpContext): Observable<CreatePostResponse> {
    return this.createPost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<CreatePostResponse>): CreatePostResponse => r.body)
    );
  }

  /**
   * CreatePost.
   *
   * CreatePost
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPost()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  createPost$Response(params?: CreatePost$Params, context?: HttpContext): Observable<StrictHttpResponse<CreatePostResponse>> {
    return createPost(this.http, this.rootUrl, params, context);
  }

  /**
   * CreatePost.
   *
   * CreatePost
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPost$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  createPost(params?: CreatePost$Params, context?: HttpContext): Observable<CreatePostResponse> {
    return this.createPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<CreatePostResponse>): CreatePostResponse => r.body)
    );
  }

  /** Path part for operation `deletePost()` */
  static readonly DeletePostPath = '/api/v1/network/posts';

  /**
   * DeletePost.
   *
   * DeletePost
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deletePost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  deletePost$Plain$Response(params?: DeletePost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<StatusCodeResult>> {
    return deletePost$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * DeletePost.
   *
   * DeletePost
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deletePost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  deletePost$Plain(params?: DeletePost$Plain$Params, context?: HttpContext): Observable<StatusCodeResult> {
    return this.deletePost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<StatusCodeResult>): StatusCodeResult => r.body)
    );
  }

  /**
   * DeletePost.
   *
   * DeletePost
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deletePost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  deletePost$Response(params?: DeletePost$Params, context?: HttpContext): Observable<StrictHttpResponse<StatusCodeResult>> {
    return deletePost(this.http, this.rootUrl, params, context);
  }

  /**
   * DeletePost.
   *
   * DeletePost
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deletePost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  deletePost(params?: DeletePost$Params, context?: HttpContext): Observable<StatusCodeResult> {
    return this.deletePost$Response(params, context).pipe(
      map((r: StrictHttpResponse<StatusCodeResult>): StatusCodeResult => r.body)
    );
  }

  /** Path part for operation `explorePosts()` */
  static readonly ExplorePostsPath = '/api/v1/network/posts/explore';

  /**
   * ExplorePosts.
   *
   * ExplorePosts
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `explorePosts$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  explorePosts$Plain$Response(params?: ExplorePosts$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<ExplorePostsResponse>> {
    return explorePosts$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * ExplorePosts.
   *
   * ExplorePosts
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `explorePosts$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  explorePosts$Plain(params?: ExplorePosts$Plain$Params, context?: HttpContext): Observable<ExplorePostsResponse> {
    return this.explorePosts$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<ExplorePostsResponse>): ExplorePostsResponse => r.body)
    );
  }

  /**
   * ExplorePosts.
   *
   * ExplorePosts
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `explorePosts()` instead.
   *
   * This method doesn't expect any request body.
   */
  explorePosts$Response(params?: ExplorePosts$Params, context?: HttpContext): Observable<StrictHttpResponse<ExplorePostsResponse>> {
    return explorePosts(this.http, this.rootUrl, params, context);
  }

  /**
   * ExplorePosts.
   *
   * ExplorePosts
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `explorePosts$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  explorePosts(params?: ExplorePosts$Params, context?: HttpContext): Observable<ExplorePostsResponse> {
    return this.explorePosts$Response(params, context).pipe(
      map((r: StrictHttpResponse<ExplorePostsResponse>): ExplorePostsResponse => r.body)
    );
  }

  /** Path part for operation `getFeed()` */
  static readonly GetFeedPath = '/api/v1/network/posts/get-feed';

  /**
   * GetFeed.
   *
   * GetFeed
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getFeed$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  getFeed$Plain$Response(params?: GetFeed$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<GetFeedResponse>> {
    return getFeed$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * GetFeed.
   *
   * GetFeed
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getFeed$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getFeed$Plain(params?: GetFeed$Plain$Params, context?: HttpContext): Observable<GetFeedResponse> {
    return this.getFeed$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<GetFeedResponse>): GetFeedResponse => r.body)
    );
  }

  /**
   * GetFeed.
   *
   * GetFeed
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getFeed()` instead.
   *
   * This method doesn't expect any request body.
   */
  getFeed$Response(params?: GetFeed$Params, context?: HttpContext): Observable<StrictHttpResponse<GetFeedResponse>> {
    return getFeed(this.http, this.rootUrl, params, context);
  }

  /**
   * GetFeed.
   *
   * GetFeed
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getFeed$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getFeed(params?: GetFeed$Params, context?: HttpContext): Observable<GetFeedResponse> {
    return this.getFeed$Response(params, context).pipe(
      map((r: StrictHttpResponse<GetFeedResponse>): GetFeedResponse => r.body)
    );
  }

  /** Path part for operation `getPost()` */
  static readonly GetPostPath = '/api/v1/network/posts/{PostId}';

  /**
   * GetPost.
   *
   * GetPost
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getPost$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  getPost$Plain$Response(params: GetPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<GetPostResponse>> {
    return getPost$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * GetPost.
   *
   * GetPost
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getPost$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getPost$Plain(params: GetPost$Plain$Params, context?: HttpContext): Observable<GetPostResponse> {
    return this.getPost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<GetPostResponse>): GetPostResponse => r.body)
    );
  }

  /**
   * GetPost.
   *
   * GetPost
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getPost()` instead.
   *
   * This method doesn't expect any request body.
   */
  getPost$Response(params: GetPost$Params, context?: HttpContext): Observable<StrictHttpResponse<GetPostResponse>> {
    return getPost(this.http, this.rootUrl, params, context);
  }

  /**
   * GetPost.
   *
   * GetPost
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getPost$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getPost(params: GetPost$Params, context?: HttpContext): Observable<GetPostResponse> {
    return this.getPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<GetPostResponse>): GetPostResponse => r.body)
    );
  }

  /** Path part for operation `getSavedPosts()` */
  static readonly GetSavedPostsPath = '/api/v1/network/posts/get-saved-posts';

  /**
   * GetSavedPosts.
   *
   * GetSavedPosts
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getSavedPosts$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  getSavedPosts$Plain$Response(params?: GetSavedPosts$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<GetSavedPostsResponse>> {
    return getSavedPosts$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * GetSavedPosts.
   *
   * GetSavedPosts
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getSavedPosts$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getSavedPosts$Plain(params?: GetSavedPosts$Plain$Params, context?: HttpContext): Observable<GetSavedPostsResponse> {
    return this.getSavedPosts$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<GetSavedPostsResponse>): GetSavedPostsResponse => r.body)
    );
  }

  /**
   * GetSavedPosts.
   *
   * GetSavedPosts
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getSavedPosts()` instead.
   *
   * This method doesn't expect any request body.
   */
  getSavedPosts$Response(params?: GetSavedPosts$Params, context?: HttpContext): Observable<StrictHttpResponse<GetSavedPostsResponse>> {
    return getSavedPosts(this.http, this.rootUrl, params, context);
  }

  /**
   * GetSavedPosts.
   *
   * GetSavedPosts
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getSavedPosts$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getSavedPosts(params?: GetSavedPosts$Params, context?: HttpContext): Observable<GetSavedPostsResponse> {
    return this.getSavedPosts$Response(params, context).pipe(
      map((r: StrictHttpResponse<GetSavedPostsResponse>): GetSavedPostsResponse => r.body)
    );
  }

  /** Path part for operation `savePost()` */
  static readonly SavePostPath = '/api/v1/network/posts/save';

  /**
   * SavePost.
   *
   * SavePost
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `savePost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  savePost$Plain$Response(params?: SavePost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<SavePostResponse>> {
    return savePost$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * SavePost.
   *
   * SavePost
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `savePost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  savePost$Plain(params?: SavePost$Plain$Params, context?: HttpContext): Observable<SavePostResponse> {
    return this.savePost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<SavePostResponse>): SavePostResponse => r.body)
    );
  }

  /**
   * SavePost.
   *
   * SavePost
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `savePost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  savePost$Response(params?: SavePost$Params, context?: HttpContext): Observable<StrictHttpResponse<SavePostResponse>> {
    return savePost(this.http, this.rootUrl, params, context);
  }

  /**
   * SavePost.
   *
   * SavePost
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `savePost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  savePost(params?: SavePost$Params, context?: HttpContext): Observable<SavePostResponse> {
    return this.savePost$Response(params, context).pipe(
      map((r: StrictHttpResponse<SavePostResponse>): SavePostResponse => r.body)
    );
  }

}
