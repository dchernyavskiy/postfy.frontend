import {Component, Input} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AuthService} from "../../../core/services/auth.service";
import {UserDto} from "../../../api/network/models/user-dto";
import {PostBriefDto} from "../../../api/network/models/post-brief-dto";
import {PostsService} from "../../../api/network/services/posts.service";
import {UsersService} from "../../../api/network/services/users.service";
import {ChatsService} from "../../../api/network/services/chats.service";

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

  constructor(private readonly postService: PostsService,
              private readonly authService: AuthService,
              private readonly usersService: UsersService,
              private readonly chatsService: ChatsService,
              private readonly router: Router,
              private readonly route: ActivatedRoute) {
    route.params.subscribe(res => {
      this.id = res['id']
      this.usersService.getProfile({UserId: this.id}).subscribe(res => {
        this.user = res.user!
      })
      this.isMyProfile = !Boolean(this.id)
      this.getPosts()
    })
  }

  getPosts() {
    this.postService.getPosts(
      {
        UserId: this.id,
        Page: ++this.page,
        PageSize: this.pageSize
      }
    ).subscribe(res => {
      this.items.push(...res.body?.items!);
      this.totalItems = res.body?.totalItems!;
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
      this.usersService.unfollowUser({body: {userId: this.user.id}}).subscribe(res => {
        this.user.isFollowed = false
      })
    } else {
      this.usersService.followUser({body: {userId: this.user.id}}).subscribe(res => {
        this.user.isFollowed = true
      })
    }
  }

  redirectToChat() {
    this.chatsService.getOrCreateChat({
      body: {userIds: [this.user.id!]}
    }).subscribe(res => {
      this.router.navigate(['/app', 'chats', res.chat?.id!])
    })
  }
}
