import {Component} from '@angular/core';
import {NetworkApiClient, PostBriefDto} from "../../../api/network-api";
import {BehaviorSubject} from "rxjs";

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

  constructor(private readonly networkApiClient: NetworkApiClient) {
    this.getPosts();
  }

  isScrollBlocking$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  getPosts() {
    console.log('in getposts')
    this.networkApiClient.explorePosts(
      this.lastPostId,
      undefined,
      undefined,
      undefined,
      this.page,
      this.pageSize
    ).subscribe(res => {
      this.posts.push(...res.body?.items!);
      this.page++;
      this.lastPostId = res.lastPostId;
      this.isScrollBlocking$.next(res.body?.totalItems == this.posts.length);
    })
  }
}
