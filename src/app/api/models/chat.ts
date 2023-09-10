/* tslint:disable */
/* eslint-disable */
import { Message } from '../models/message';
import { User } from '../models/user';
export interface Chat {
  created?: string;
  createdBy?: null | number;
  id?: string;
  messages?: null | Array<Message>;
  originalVersion?: number;
  users?: null | Array<User>;
}
