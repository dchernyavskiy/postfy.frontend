/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { FilterModel } from '../../models/filter-model';
import { GetUsersResponse } from '../../models/get-users-response';

export interface GetUsers$Params {
  Page?: number;
  PageSize?: number;
  Includes?: Array<string>;
  Filters?: Array<FilterModel>;
  Sorts?: Array<string>;
}

export function getUsers(http: HttpClient, rootUrl: string, params?: GetUsers$Params, context?: HttpContext): Observable<StrictHttpResponse<GetUsersResponse>> {
  const rb = new RequestBuilder(rootUrl, getUsers.PATH, 'get');
  if (params) {
    rb.query('Page', params.Page, {"style":"form"});
    rb.query('PageSize', params.PageSize, {"style":"form"});
    rb.query('Includes', params.Includes, {"style":"form"});
    rb.query('Filters', params.Filters, {"style":"form"});
    rb.query('Sorts', params.Sorts, {"style":"form"});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<GetUsersResponse>;
    })
  );
}

getUsers.PATH = '/api/v1/identity/users';
