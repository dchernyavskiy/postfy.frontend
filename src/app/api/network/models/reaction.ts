/* tslint:disable */
/* eslint-disable */
import { Post } from '../models/post';
import { User } from '../models/user';
export interface Reaction {
  created?: string;
  createdBy?: null | number;
  id?: string;
  isLiked?: boolean;
  originalVersion?: number;
  post?: Post;
  postId?: string;
  user?: User;
  userId?: string;
}
