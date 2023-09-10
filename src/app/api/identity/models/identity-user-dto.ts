/* tslint:disable */
/* eslint-disable */
import { UserState } from '../models/user-state';
export interface IdentityUserDto {
  createdAt?: string;
  email?: null | string;
  firstName?: null | string;
  id?: string;
  lastLoggedInAt?: null | string;
  lastName?: null | string;
  phoneNumber?: null | string;
  refreshTokens?: null | Array<string>;
  roles?: null | Array<string>;
  userName?: null | string;
  userState?: UserState;
}
