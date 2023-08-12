import {Component, Input} from '@angular/core';
import {PostBriefDto} from "../../../../../api/network-api";
import {PostService} from "../../../../../core/services/post.service";

@Component({
  selector: 'div[app-post]',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {
  @Input() post: PostBriefDto = {};

  constructor(private readonly postService: PostService) {
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
}

