/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { SearchUsersResponse } from '../../models/search-users-response';

export interface SearchUsers$Params {
  query?: string;
}

export function searchUsers(http: HttpClient, rootUrl: string, params?: SearchUsers$Params, context?: HttpContext): Observable<StrictHttpResponse<SearchUsersResponse>> {
  const rb = new RequestBuilder(rootUrl, searchUsers.PATH, 'get');
  if (params) {
    rb.query('query', params.query, {"style":"form"});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<SearchUsersResponse>;
    })
  );
}

searchUsers.PATH = '/api/v1/network/users/search';
