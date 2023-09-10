import {inject, Injectable} from '@angular/core';
import {
  ResolveFn,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import {map, Observable, of} from 'rxjs';
import {PostDto} from "../../../../api/network/models/post-dto";
import {PostsService} from "../../../../api/network/services/posts.service";

export const PostResolver: ResolveFn<PostDto> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
  postService: PostsService = inject(PostsService)
): Observable<PostDto> => {
  return postService.getPost(route.params['id']).pipe(map(res => res.body!))
}
// @Injectable({
//   providedIn: 'root'
// })
// export class PostResolver implements Resolve<boolean> {
//   constructor() {
//   }
//   resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
//     return of(true);
//   }
// }
