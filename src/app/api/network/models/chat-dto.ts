/* tslint:disable */
/* eslint-disable */
import { MessageBriefDto } from '../models/message-brief-dto';
import { UserBriefDto } from '../models/user-brief-dto';
export interface ChatDto {
  guest?: UserBriefDto;
  guests?: null | Array<UserBriefDto>;
  id?: string;
  messages?: null | Array<MessageBriefDto>;
}
