import {Injectable} from '@angular/core';
import {FilterModel, NetworkApiClient, UpdatePost} from "../../api/network-api";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private readonly networkApiClient: NetworkApiClient) {
  }

  likePost(postId: string) {
    return this.networkApiClient.likePost({
      postId: postId
    })
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

  getPosts(userId: string | undefined, includes: string[] | undefined, filters: FilterModel[] | undefined, sorts: string[] | undefined, page: number | undefined, pageSize: number | undefined) {
    return this.networkApiClient.getPosts(
      userId,
      includes,
      filters,
      sorts,
      page,
      pageSize
    );
  }

  // createPost(body: CreatePost) {
  //   return this.networkApiClient.createPost();
  // }

  deletePost(id: string) {
    return this.networkApiClient.deletePost({id: id});
  }

  updatePost(body: UpdatePost) {
    return this.networkApiClient.updatePost(body)
  }
}
