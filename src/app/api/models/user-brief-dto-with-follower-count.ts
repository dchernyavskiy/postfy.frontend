/* tslint:disable */
/* eslint-disable */
import { MediaBriefDto } from '../models/media-brief-dto';
export interface UserBriefDtoWithFollowerCount {
  firstName?: null | string;
  followerCount?: number;
  id?: string;
  isFollowedByYou?: boolean;
  lastName?: null | string;
  profileImage?: MediaBriefDto;
  profileName?: null | string;
}
