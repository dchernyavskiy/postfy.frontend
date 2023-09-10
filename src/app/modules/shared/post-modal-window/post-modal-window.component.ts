import {Component, Input} from '@angular/core';
import {BehaviorSubject,} from "rxjs";
import {Router} from "@angular/router";
import {PostDto} from "../../../api/network/models/post-dto";
import {CreateComment} from "../../../api/network/models/create-comment";
import {PostsService} from "../../../api/network/services/posts.service";
import {ReactionsService} from "../../../api/network/services/reactions.service";
import {MessagesService} from "../../../api/network/services/messages.service";
import {CommentsService} from "../../../api/network/services/comments.service";
import {UsersService} from "../../../api/network/services/users.service";

@Component({
  selector: 'app-post-modal-window',
  templateUrl: './post-modal-window.component.html',
  styleUrls: ['./post-modal-window.component.scss']
})
export class PostModalWindowComponent {
  @Input() isHidden$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  @Input() post: PostDto = {};
  createComment: CreateComment = {};

  constructor(private readonly router: Router,
              private readonly postService: PostsService,
              private readonly messagesService: MessagesService,
              private readonly usersService: UsersService,
              private readonly commentsService: CommentsService,
              private readonly reactionsService: ReactionsService) {

  }

  likePost(id: string) {
    this.reactionsService.likePost({
      body: {
        postId: id
      }
    }).subscribe(res => {
      this.post.isLiked = !this.post.isLiked
      if (this.post.isLiked) {
        this.post.likeCount!++;
      } else {
        this.post.likeCount!--;
      }
    })
  }

  commentSubject$ = new BehaviorSubject<{
    isCommentLoading: boolean,
    isLoaded: boolean
  }>({isCommentLoading: false, isLoaded: false})

  sendComment() {
    this.commentSubject$.next({isCommentLoading: true, isLoaded: false})
    this.commentsService.createComment({body: this.createComment}).subscribe(res => {
      this.createComment = {};
      this.getPost()
    })
  }

  getPost() {
    this.postService.getPost({PostId: this.post.id!}).subscribe(res => {
      this.commentSubject$.next({isCommentLoading: false, isLoaded: true})
      this.post = res.body!;
    })
  }

  unfollowUser(id: string) {
    this.usersService.unfollowUser({
      body: {
        userId: id
      }
    }).subscribe(res => {
      this.router.navigate(['/app'])
    })
  }

  savePost(id: string) {
    this.postService.savePost({
      body: {
        postId: id
      }
    }).subscribe(res => {
    })
  }
}
