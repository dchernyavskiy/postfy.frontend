/* tslint:disable */
/* eslint-disable */
import { Chat } from '../models/chat';
import { Comment } from '../models/comment';
import { Media } from '../models/media';
import { Message } from '../models/message';
import { NotificationSettings } from '../models/notification-settings';
import { Post } from '../models/post';
import { PrivacySettings } from '../models/privacy-settings';
import { Reaction } from '../models/reaction';
import { Subscription } from '../models/subscription';
export interface User {
  bio?: null | string;
  chats?: null | Array<Chat>;
  comments?: null | Array<Comment>;
  created?: string;
  createdBy?: null | number;
  email?: null | string;
  firstName?: null | string;
  followerSubscriptions?: null | Array<Subscription>;
  followers?: null | Array<User>;
  followingSubscriptions?: null | Array<Subscription>;
  followings?: null | Array<User>;
  id?: string;
  lastName?: null | string;
  messages?: null | Array<Message>;
  notificationSettings?: NotificationSettings;
  originalVersion?: number;
  phoneNumber?: null | string;
  posts?: null | Array<Post>;
  privacySettings?: PrivacySettings;
  profileImage?: Media;
  profileName?: null | string;
  reactions?: null | Array<Reaction>;
  savedPosts?: null | Array<Post>;
  signupDate?: string;
}
