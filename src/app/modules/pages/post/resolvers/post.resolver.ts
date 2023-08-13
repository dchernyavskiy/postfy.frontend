import {inject, Injectable} from '@angular/core';
import {
  Router, Resolve, ResolveFn,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import {map, Observable, of} from 'rxjs';
import {PostDto} from "../../../../api/network-api";
import {PostService} from "../../../../core/services/post.service";

export const PostResolver: ResolveFn<PostDto> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
  postService: PostService = inject(PostService)
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
