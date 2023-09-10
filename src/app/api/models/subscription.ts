/* tslint:disable */
/* eslint-disable */
import { User } from '../models/user';
export interface Subscription {
  follower?: User;
  followerId?: string;
  following?: User;
  followingId?: string;
}
