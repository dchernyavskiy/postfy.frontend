import {Component} from '@angular/core';
import {PostService} from "../../../core/services/post.service";
import {NetworkApiClient, PostBriefDto} from "../../../api/network-api";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  page: number = 1;
  pageSize: number = 12;
  items: PostBriefDto[] = [];
  id: string = '';

  constructor(private readonly postService: PostService, private readonly networkApiClient: NetworkApiClient, private readonly route: ActivatedRoute) {
    route.queryParams.subscribe(res => {
      this.id = res['id']
      this.getPosts()
    })
  }

  getPosts() {
    this.postService.getPosts(
      this.id,
      undefined,
      undefined,
      undefined,
      this.page,
      this.pageSize
    ).subscribe(res => {
      this.items.push(...res.body?.items!);
      console.log(this.items)
    })
  }
}
