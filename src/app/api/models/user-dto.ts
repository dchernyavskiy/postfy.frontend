/* tslint:disable */
/* eslint-disable */
import { MediaBriefDto } from '../models/media-brief-dto';
export interface UserDto {
  bio?: null | string;
  firstName?: null | string;
  followerCount?: number;
  followingCount?: number;
  id?: string;
  isFollowed?: boolean;
  lastName?: null | string;
  postCount?: number;
  profileImage?: MediaBriefDto;
  profileName?: null | string;
}
