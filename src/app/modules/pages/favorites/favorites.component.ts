import {Component} from '@angular/core';
import {PostBriefDto} from "../../../api/network/models/post-brief-dto";
import {PostsService} from "../../../api/network/services/posts.service";

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent {
  page: number = 0;
  pageSize: number = 25;
  items: PostBriefDto[] = [];
  totalItems: number = 0;
  isRequestSending = false;

  constructor(private readonly postsService: PostsService) {
    this.getSavedPosts(10)
  }

  getSavedPosts(pageSize: number) {
    this.postsService.getSavedPosts({
        Page: ++this.page,
        PageSize: pageSize
      }
    ).subscribe(res => {
      this.isRequestSending = false;
      this.totalItems = res.body?.totalItems!
      for (const post of res.body?.items!) {
        this.items.push(post)
      }
    })
  }

  onScroll(event: any) {
    const target = document.getElementById('post-placeholder')
    if (target) {
      const rect = target.getBoundingClientRect()
      const isVisible = rect.top >= 0 && rect.bottom <= window.innerHeight
      if (isVisible && this.items.length < this.totalItems && !this.isRequestSending) {
        this.isRequestSending = true
        this.getSavedPosts(this.pageSize)
      }
    }
  }

  reloadFeed() {
    this.items = []
    this.getSavedPosts(10)
  }
}
