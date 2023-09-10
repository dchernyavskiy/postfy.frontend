/* tslint:disable */
/* eslint-disable */
import { Chat } from '../models/chat';
import { Media } from '../models/media';
import { Post } from '../models/post';
import { User } from '../models/user';
export interface Message {
  chat?: Chat;
  chatId?: string;
  children?: null | Array<Message>;
  created?: string;
  createdBy?: null | number;
  id?: string;
  isPost?: boolean;
  medias?: null | Array<Media>;
  originalVersion?: number;
  parent?: Message;
  parentId?: null | string;
  post?: Post;
  postId?: null | string;
  sender?: User;
  senderId?: string;
  text?: null | string;
}
