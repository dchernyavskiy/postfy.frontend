/* tslint:disable */
/* eslint-disable */
import { Comment } from '../models/comment';
import { MediaBriefDto } from '../models/media-brief-dto';
import { UserBriefDto } from '../models/user-brief-dto';
export interface PostDto {
  caption?: null | string;
  commentCount?: number;
  comments?: null | Array<Comment>;
  created?: string;
  id?: string;
  isLiked?: boolean;
  likeCount?: number;
  medias?: null | Array<MediaBriefDto>;
  user?: UserBriefDto;
}
