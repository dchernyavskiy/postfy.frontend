/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';

/**
 * Global configuration
 */
@Injectable({
  providedIn: 'root',
})
export class ApiConfiguration {
  rootUrl: string = '';
}

/**
 * Parameters for `IdentityApiModule.forRoot()`
 */
export interface ApiConfigurationParams {
  rootUrl?: string;
}
