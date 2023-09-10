/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { GetSettings } from '../../models/get-settings';
import { GetSettingsResponse } from '../../models/get-settings-response';

export interface GetSettings$Params {
  request?: GetSettings;
}

export function getSettings(http: HttpClient, rootUrl: string, params?: GetSettings$Params, context?: HttpContext): Observable<StrictHttpResponse<GetSettingsResponse>> {
  const rb = new RequestBuilder(rootUrl, getSettings.PATH, 'get');
  if (params) {
    rb.query('request', params.request, {"style":"form"});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<GetSettingsResponse>;
    })
  );
}

getSettings.PATH = '/api/v1/network/users/settings';
