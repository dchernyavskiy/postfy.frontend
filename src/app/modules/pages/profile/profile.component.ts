import {Component, Input} from '@angular/core';
import {PostService} from "../../../core/services/post.service";
import {NetworkApiClient, PostBriefDto, UserDto} from "../../../api/network-api";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthService} from "../../../core/services/auth.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  page: number = 0;
  pageSize: number = 12;
  id: string = '';
  user: UserDto = {};
  totalItems: number = 0;
  items: PostBriefDto[] = [];

  constructor(private readonly postService: PostService,
              private readonly authService: AuthService,
              private readonly networkApiClient: NetworkApiClient,
              private readonly router: Router,
              private readonly route: ActivatedRoute) {
    route.params.subscribe(res => {
      this.id = res['id']
      this.networkApiClient.getProfile(this.id).subscribe(res => {
        this.user = res.user!
      })
      this.isMyProfile = !Boolean(this.id)
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
  @Input() isMyProfile: boolean = false;

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

  follow() {
    if (this.user.isFollowed) {
      this.networkApiClient.unfollowUser({userId: this.user.id}).subscribe(res => {
        this.user.isFollowed = false
        console.log(res)
      })
    } else {
      this.networkApiClient.followUser({userId: this.user.id}).subscribe(res => {
        this.user.isFollowed = true
        console.log(res)
      })
    }
  }

  redirectToChat() {
    this.networkApiClient.getOrCreateChat({
      userIds: [this.user.id!]
    }).subscribe(res => {
      console.log(res)
      this.router.navigate(['/app', 'chats', res.chat?.id!])
    })
  }
}
