/* tslint:disable */
/* eslint-disable */
import { MessageBriefDto } from '../models/message-brief-dto';
import { UserBriefDto } from '../models/user-brief-dto';
export interface ChatBriefDto {
  guest?: UserBriefDto;
  guests?: null | Array<UserBriefDto>;
  id?: string;
  lastMessage?: MessageBriefDto;
  lastMessages?: null | Array<MessageBriefDto>;
}
