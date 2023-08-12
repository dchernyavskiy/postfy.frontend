import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HomeRoutingModule} from './home-routing.module';
import {HomeComponent} from './home.component';
import {StoriesComponent} from "./components/stories/stories.component";
import {AngularSvgIconModule} from "angular-svg-icon";
import {PostComponent} from './components/post/post.component';
import {CommentComponent} from './components/post/comment/comment.component';
import {SlideComponent} from './components/post/slide/slide.component';
import {SharedModule} from "../../shared/shared.module";
import {InfiniteScrollModule} from "ngx-infinite-scroll";


@NgModule({
  declarations: [
    HomeComponent,
    StoriesComponent,
    PostComponent,
    CommentComponent,
    SlideComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    AngularSvgIconModule,
    SharedModule,
    InfiniteScrollModule,
  ]
})
export class HomeModule {
}
