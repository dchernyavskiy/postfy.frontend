import {Component} from '@angular/core';
import {PostService} from "../../../core/services/post.service";
import {NetworkApiClient, PostBriefDto, UserDto} from "../../../api/network-api";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  page: number = 0;
  pageSize: number = 12;
  items: PostBriefDto[] = [];
  id: string = '';
  user: UserDto = {};
  totalItems: number = 0;

  constructor(private readonly postService: PostService, private readonly networkApiClient: NetworkApiClient, private readonly route: ActivatedRoute) {
    route.params.subscribe(res => {
      this.id = res['id']
      console.log(this.id)
      this.networkApiClient.getProfile(this.id).subscribe(res => {
        this.user = res.user!
      })
      this.getPosts()
    })
  }

  getPosts() {
    this.postService.getPosts(
      this.id,
      undefined,
      undefined,
      undefined,
      ++this.page,
      this.pageSize
    ).subscribe(res => {
      this.items.push(...res.body?.items!);
      this.totalItems = res.body?.totalItems!;
      console.log(this.items)
    })
  }

  isRequestSending = false;

  onScroll(event: any) {
    const target = document.getElementById('post-placeholder')
    if (target) {
      const rect = target.getBoundingClientRect()
      const isVisible = rect.top >= 0 && rect.bottom <= window.innerHeight

      if (isVisible && this.items.length < this.totalItems && !this.isRequestSending) {
        this.isRequestSending = true
        this.getPosts()
      }
    }
  }
}
