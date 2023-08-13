import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PostService} from "../../../core/services/post.service";
import {PostDto} from "../../../api/network-api";
import {map} from "rxjs";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {
  post: PostDto = {};

  constructor(private readonly postService: PostService, private readonly route: ActivatedRoute) {
    route.data.pipe(map(({post}) => {
      return post
    })).subscribe(res => {
      this.post = res
      console.log(res)
    })
    // route.params.subscribe(res => {
    //   postService.getPost(res['id']).subscribe(res => {
    //     this.post = res.body!;
    //     console.log(res)
    //   })
    // })
  }

  unfollowUser(s: string) {

  }

  savePost(s: string) {

  }

  likePost(s: string) {

  }
}
