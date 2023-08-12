import {Component, HostListener} from '@angular/core';
import {PostService} from "../../../core/services/post.service";
import {PostBriefDto} from "../../../api/network-api";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  page: number = 1;
  pageSize: number = 25;
  items: PostBriefDto[] = [];

  constructor(private readonly postService: PostService) {
    this.postService.getFeed(
      undefined,
      undefined,
      undefined,
      this.page,
      this.pageSize
    ).subscribe(res => {
      console.log(res)
      this.items.push(...res.body?.items!)
    })
  }
}
