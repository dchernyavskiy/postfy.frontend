/* tslint:disable */
/* eslint-disable */
import { PostBriefDto } from '../models/post-brief-dto';
import { UserBriefDto } from '../models/user-brief-dto';
export interface MessageBriefDto {
  id?: string;
  isPost?: boolean;
  isWrittenByYou?: boolean;
  parent?: MessageBriefDto;
  post?: PostBriefDto;
  text?: null | string;
  user?: UserBriefDto;
}
