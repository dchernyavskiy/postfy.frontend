import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CreateComment, NetworkApiClient, PostBriefDto} from "../../../../../api/network-api";
import {PostService} from "../../../../../core/services/post.service";
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'div[app-post]',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  @Input() post: PostBriefDto = {};
  @Output() unfollow: EventEmitter<void> = new EventEmitter();
  createComment: CreateComment = {}

  constructor(private readonly postService: PostService, private readonly networkApiClient: NetworkApiClient) {

  }

  likePost(id: string) {
    this.postService.likePost(id).subscribe(res => {
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
    this.networkApiClient.createComment(this.createComment).subscribe(res => {
      this.createComment = {};
      this.getPost()
    })
  }

  getPost() {
    this.networkApiClient.getPost(this.post.id!).subscribe(res => {
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
    this.networkApiClient.unfollowUser({userId: id}).subscribe(res => {
      this.unfollow.emit()
    })
  }

  savePost(id: string) {
    this.networkApiClient.savePost({postId: id}).subscribe(res => {
      console.log(res)
    })
  }
}

