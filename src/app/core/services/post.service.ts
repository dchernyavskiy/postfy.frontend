import {Injectable} from '@angular/core';
import {CreatePost, FilterModel, NetworkApiClient, UpdatePost} from "../../api/network-api";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private readonly networkApiClient: NetworkApiClient) {
  }

  getFeed(includes: string[] | undefined, filters: FilterModel[] | undefined, sorts: string[] | undefined, page: number | undefined, pageSize: number | undefined) {
    return this.networkApiClient.getFeed(
      includes,
      filters,
      sorts,
      page,
      pageSize
    );
  }

  getPosts(includes: string[] | undefined, filters: FilterModel[] | undefined, sorts: string[] | undefined, page: number | undefined, pageSize: number | undefined) {
    return this.networkApiClient.getPosts(
      includes,
      filters,
      sorts,
      page,
      pageSize
    );
  }

  createPost(body: CreatePost) {
    return this.networkApiClient.createPost(body);
  }

  deletePost(id: string) {
    return this.networkApiClient.deletePost({id: id});
  }

  updatePost(body: UpdatePost) {
    return this.networkApiClient.updatePost(body)
  }
}
