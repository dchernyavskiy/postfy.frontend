/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ExplorePostsResponse } from '../../models/explore-posts-response';
import { FilterModel } from '../../models/filter-model';

export interface ExplorePosts$Plain$Params {
  LastPostId?: string;
  Includes?: Array<string>;
  Filters?: Array<FilterModel>;
  Sorts?: Array<string>;
  Page?: number;
  PageSize?: number;
}

export function explorePosts$Plain(http: HttpClient, rootUrl: string, params?: ExplorePosts$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<ExplorePostsResponse>> {
  const rb = new RequestBuilder(rootUrl, explorePosts$Plain.PATH, 'get');
  if (params) {
    rb.query('LastPostId', params.LastPostId, {"style":"form"});
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
      return r as StrictHttpResponse<ExplorePostsResponse>;
    })
  );
}

explorePosts$Plain.PATH = '/api/v1/network/posts/explore';
