import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {NotificationService, Notification} from "../../../core/services/notification.service";
import {PostBriefDto} from "../../../api/network/models/post-brief-dto";
import {CreateComment} from "../../../api/network/models/create-comment";
import {PostsService} from "../../../api/network/services/posts.service";
import {ReactionsService} from "../../../api/network/services/reactions.service";
import {CommentsService} from "../../../api/network/services/comments.service";
import {UsersService} from "../../../api/network/services/users.service";

@Component({
  selector: 'div[app-post]',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  @Input() post: PostBriefDto = {};
  @Output() unfollow: EventEmitter<void> = new EventEmitter();
  createComment: CreateComment = {}

  constructor(private readonly postService: PostsService,
              private readonly notificationService: NotificationService,
              private readonly reactionsService: ReactionsService,
              private readonly commentsService: CommentsService,
              private readonly usersService: UsersService
  ) {

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
      this.createComment.text = '';
      this.getPost()
    })
  }

  getPost() {
    this.postService.getPost({PostId: this.post.id!}).subscribe(res => {
      this.commentSubject$.next({isCommentLoading: false, isLoaded: true})
      // this.post = res.body!;
      this.post.comments = res.body?.comments;
    })
  }

  ngOnInit(): void {
    this.createComment.postId = this.post.id
  }

  loadComments() {
    this.commentSubject$.next({isCommentLoading: true, isLoaded: false})
    this.getPost()
  }

  unfollowUser(id: string) {
    this.usersService.unfollowUser({body: {userId: id}}).subscribe(res => {
      this.unfollow.emit()
    })
  }

  savePost(post: PostBriefDto) {
    this.postService.savePost({body: {postId: post.id}}).subscribe(res => {
      this.post.isSaved = !this.post.isSaved;
      if (this.post.isSaved) {
        this.notificationService.add(new Notification("Post was saved."))
      } else {
        this.notificationService.add(new Notification("Post was unsaved."))
      }
    })
  }
}

