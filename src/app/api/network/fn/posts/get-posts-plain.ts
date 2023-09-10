/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { FilterModel } from '../../models/filter-model';
import { GetPostsResponse } from '../../models/get-posts-response';

export interface GetPosts$Plain$Params {
  UserId?: string;
  Includes?: Array<string>;
  Filters?: Array<FilterModel>;
  Sorts?: Array<string>;
  Page?: number;
  PageSize?: number;
}

export function getPosts$Plain(http: HttpClient, rootUrl: string, params?: GetPosts$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<GetPostsResponse>> {
  const rb = new RequestBuilder(rootUrl, getPosts$Plain.PATH, 'get');
  if (params) {
    rb.query('UserId', params.UserId, {"style":"form"});
    rb.query('Includes', params.Includes, {"style":"form"});
    rb.query('Filters', params.Filters, {"style":"form"});
    rb.query('Sorts', params.Sorts, {"style":"form"});
    rb.query('Page', params.Page, {"style":"form"});
    rb.query('PageSize', params.PageSize, {"style":"form"});
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<GetPostsResponse>;
    })
  );
}

getPosts$Plain.PATH = '/api/v1/network/posts';
