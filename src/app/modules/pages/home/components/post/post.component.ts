import {Component, Input, OnInit} from '@angular/core';
import {CreateComment, NetworkApiClient, PostBriefDto} from "../../../../../api/network-api";
import {PostService} from "../../../../../core/services/post.service";

@Component({
  selector: 'div[app-post]',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  @Input() post: PostBriefDto = {};
  createComment: CreateComment = {}

  constructor(private readonly postService: PostService, private readonly networkApiClient: NetworkApiClient) {

  }

  likePost(id: string) {
    this.postService.likePost(id).subscribe(res => {
      console.log(res)
      this.post.isLiked = !this.post.isLiked
      if (this.post.isLiked) {
        this.post.likeCount!++;
      } else {
        this.post.likeCount!--;
      }
    })
  }

  sendComment() {
    this.networkApiClient.createComment(this.createComment).subscribe(res => {
      this.createComment = {};
      this.networkApiClient.getPost(this.post.id!).subscribe(res =>{
        this.post = res.body!;
      })
    })
  }

  ngOnInit(): void {
    this.createComment.postId = this.post.id
  }
}

