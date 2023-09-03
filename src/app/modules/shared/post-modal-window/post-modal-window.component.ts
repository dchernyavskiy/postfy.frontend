import {Component, Input} from '@angular/core';
import {BehaviorSubject, map} from "rxjs";
import {CreateComment, NetworkApiClient, PostDto} from "../../../api/network-api";
import {ActivatedRoute, Router} from "@angular/router";
import {PostService} from "../../../core/services/post.service";
import {ModalWindowService} from "../../../core/services/modal-window.service";

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
              private readonly postService: PostService,
              private readonly modalWindowService: ModalWindowService,
              private readonly networkApiClient: NetworkApiClient) {

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
      this.post = res.body!;
    })
  }

  unfollowUser(id: string) {
    this.networkApiClient.unfollowUser({userId: id}).subscribe(res => {
      this.router.navigate(['/app'])
    })
  }

  savePost(id: string) {
    this.networkApiClient.savePost({postId: id}).subscribe(res => {
    })
  }
}
