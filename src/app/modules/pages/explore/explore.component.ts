import {Component} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {PostsService} from "../../../api/network/services/posts.service";
import {PostBriefDto} from "../../../api/network/models/post-brief-dto";

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss']
})
export class ExploreComponent {
  lastPostId: string | undefined;
  page = 1;
  pageSize = 18;
  posts: PostBriefDto[] = [];

  constructor(private readonly postsServices: PostsService
  ) {
    this.getPosts();
  }

  isScrollBlocking$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  getPosts() {
    this.postsServices.explorePosts({
      Page: this.page,
      PageSize: this.pageSize
    }).subscribe(res => {
      console.log(res)
      this.posts.push(...res.body?.items!);
      this.page++;
      this.lastPostId = res.lastPostId;
      this.isScrollBlocking$.next(res.body?.totalItems == this.posts.length);
    })
    //
    // this.networkApiClient.explorePosts(
    //   this.lastPostId,
    //   undefined,
    //   undefined,
    //   undefined,
    //   this.page,
    //   this.pageSize
    // ).subscribe(res => {
    //   this.posts.push(...res.body?.items!);
    //   this.page++;
    //   this.lastPostId = res.lastPostId;
    //   this.isScrollBlocking$.next(res.body?.totalItems == this.posts.length);
    // })
  }

  protected readonly window = window;
}
