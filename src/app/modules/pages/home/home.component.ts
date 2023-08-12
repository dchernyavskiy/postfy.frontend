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
    this.getFeed()
  }

  getFeed() {
    this.postService.getFeed(
      undefined,
      undefined,
      undefined,
      ++this.page,
      this.pageSize
    ).subscribe(res => {
      console.log(res)
      this.isRequestSending = false;
      this.totalItems = res.body?.totalItems!
      this.items.push(...res.body?.items!)
    })
  }


  onScroll(event: any) {
    const target = document.getElementById('post-placeholder')
    if (target) {
      const rect = target.getBoundingClientRect()
      const isVisible = rect.top >= 0 && rect.bottom <= window.innerHeight
      if (isVisible && this.items.length < this.totalItems && !this.isRequestSending) {
        this.isRequestSending = true
        this.getFeed()
      }
    }
  }
}
