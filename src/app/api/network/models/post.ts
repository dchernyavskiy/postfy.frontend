/* tslint:disable */
/* eslint-disable */
import { Comment } from '../models/comment';
import { Media } from '../models/media';
import { Message } from '../models/message';
import { Reaction } from '../models/reaction';
import { User } from '../models/user';
export interface Post {
  caption?: null | string;
  comments?: null | Array<Comment>;
  created?: string;
  createdBy?: null | number;
  id?: string;
  medias?: null | Array<Media>;
  message?: Message;
  messageId?: null | string;
  originalVersion?: number;
  reactions?: null | Array<Reaction>;
  savers?: null | Array<User>;
  user?: User;
  userId?: string;
}
