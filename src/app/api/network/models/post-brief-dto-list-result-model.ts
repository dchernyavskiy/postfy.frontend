/* tslint:disable */
/* eslint-disable */
import { PostBriefDto } from '../models/post-brief-dto';
export interface PostBriefDtoListResultModel {
  items?: null | Array<PostBriefDto>;
  page?: number;
  pageSize?: number;
  totalItems?: number;
}
