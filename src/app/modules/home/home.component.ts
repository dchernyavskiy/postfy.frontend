import {Component} from '@angular/core';
import {NetworkApiClient} from "../../api/network-api";
import {PostService} from "../../core/services/post.service";
import {IdentityApiClient} from "../../api/identity-api";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private readonly postService: PostService) {
    this.postService.getFeed(
      undefined,
      undefined,
      undefined,
      1,
      10
    ).subscribe(res => {
      console.log(res)
    })
  }
}
