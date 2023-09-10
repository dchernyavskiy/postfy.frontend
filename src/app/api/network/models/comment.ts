/* tslint:disable */
/* eslint-disable */
import { Post } from '../models/post';
import { User } from '../models/user';
export interface Comment {
  children?: null | Array<Comment>;
  created?: string;
  createdBy?: null | number;
  id?: string;
  originalVersion?: number;
  parent?: Comment;
  parentId?: null | string;
  post?: Post;
  postId?: string;
  text?: null | string;
  user?: User;
  userId?: string;
}
