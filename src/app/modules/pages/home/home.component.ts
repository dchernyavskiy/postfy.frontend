import {Component, HostListener} from '@angular/core';
import {PostService} from "../../../core/services/post.service";
import {PostBriefDto} from "../../../api/network-api";
import {ta} from "date-fns/locale";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  page: number = 0;
  pageSize: number = 25;
  items: PostBriefDto[] = [];
  totalItems: number = 0;
  isRequestSending = false;


  constructor(private readonly postService: PostService) {
    this.getFeed(10)
  }

  getFeed(pageSize: number) {
    this.postService.getFeed(
      undefined,
      undefined,
      undefined,
      ++this.page,
      pageSize
    ).subscribe(res => {
      this.isRequestSending = false;
      this.totalItems = res.body?.totalItems!
      for (const post of res.body?.items!) {
        this.items.push(post)
      }
      // this.items.push(...res.body?.items!)
    })
  }


  onScroll(event: any) {
    const target = document.getElementById('post-placeholder')
    if (target) {
      const rect = target.getBoundingClientRect()
      const isVisible = rect.top >= 0 && rect.bottom <= window.innerHeight

      if (isVisible && this.items.length < this.totalItems && !this.isRequestSending) {
        this.isRequestSending = true
        this.getFeed(this.pageSize)
      }
    }
  }

  reloadFeed() {
    this.items = []
    this.getFeed(10)
  }
}
