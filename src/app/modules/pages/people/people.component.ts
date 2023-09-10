import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {UserBriefDtoWithFollowerCount} from "../../../api/network/models/user-brief-dto-with-follower-count";
import {UsersService} from "../../../api/network/services/users.service";
import {ChatsService} from "../../../api/network/services/chats.service";

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent {
  followersPage: number = 1;
  followingsPage: number = 1;
  suggestionsPage: number = 1;
  pageSize = 18;

  followers: UserBriefDtoWithFollowerCount[] = [];
  followings: UserBriefDtoWithFollowerCount[] = [];
  suggestions: UserBriefDtoWithFollowerCount[] = [];

  isThereMoreFollowers: boolean = true;
  isThereMoreFollowings: boolean = true;
  isThereMoreSuggestions: boolean = true;
  followerCount: number = 0;
  followingsCount: number = 0;

  constructor(private readonly usersService: UsersService,
              private readonly chatsService: ChatsService,
              private readonly router: Router) {
    this.getFollowers();
    this.getFollowings();
    this.getSuggestions();
  }

  getFollowers() {
    this.usersService.getFollowers(
      {
        Page: this.followersPage,
        PageSize: this.pageSize
      }
    ).subscribe(res => {
      this.followers.push(...res.body?.items!);
      this.followersPage++;
      this.isThereMoreFollowers = this.followers.length != res.body?.totalItems;
      this.followerCount = res.body?.totalItems!;
    })
  }

  getFollowings() {
    this.usersService.getFollowings(
      {
        Page: this.followingsPage,
        PageSize: this.pageSize
      }
    ).subscribe(res => {
      this.followings.push(...res.body?.items!);
      this.followingsPage++;
      this.isThereMoreFollowings = this.followings.length != res.body?.totalItems;
      this.followingsCount = res.body?.totalItems!;
    })
  }

  getSuggestions() {
    this.usersService.getSuggestions(
      {
        Page: this.suggestionsPage,
        PageSize: this.pageSize
      }
    ).subscribe(res => {
      this.suggestions.push(...res.body?.items!);
      this.suggestionsPage++;
      this.isThereMoreSuggestions = this.suggestions.length != res.body?.totalItems;
    })
  }

  unfollow(follower: UserBriefDtoWithFollowerCount) {
    if (follower.isFollowedByYou) {
      this.usersService.unfollowUser({body: {userId: follower.id}}).subscribe(res => {
        if (this.followings.length == this.followingsCount) {
          this.followings.push(follower);
        }
        this.followingsCount--;
      })
    } else {
      this.usersService.followUser({body: {userId: follower.id}}).subscribe(res => {
        if (this.followings.length == this.followingsCount) {
          this.followings.splice(this.followings.indexOf(follower), 1);
        }
        this.followingsCount++;
      })
    }
    follower.isFollowedByYou = !follower.isFollowedByYou
  }

  follow(following: UserBriefDtoWithFollowerCount) {
    this.usersService.unfollowUser({body: {userId: following.id}}).subscribe(res => {
      this.followings.splice(this.followings.indexOf(following), 1);
      this.suggestions.push(following)
    })
  }

  followFromSuggestion(suggestion: UserBriefDtoWithFollowerCount) {
    this.usersService.followUser({body: {userId: suggestion.id}}).subscribe(res => {
      this.suggestions.splice(this.suggestions.indexOf(suggestion), 1);
      suggestion.isFollowedByYou = true;
      this.followings.push(suggestion);
    })
  }

  message(receiver: UserBriefDtoWithFollowerCount) {
    this.chatsService.getOrCreateChat({body: {userIds: [receiver.id!]}}).subscribe(res => {
      this.router.navigate(['/app', 'chats', res.chat?.id])
    })
  }
}
