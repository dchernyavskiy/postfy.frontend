import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ModalWindowComponent} from './modal-window/modal-window.component';
import {AngularSvgIconModule} from "angular-svg-icon";
import {FormsModule} from "@angular/forms";
import {RelativeTimePipe} from './pipes/relative-time.pipe';
import {CarouselComponent} from './carousel/carousel.component';
import {CommentComponent} from "./comment/comment.component";
import {RouterLink} from "@angular/router";
import { ImagePlaceholderPipe } from './pipes/image-placeholder.pipe';
import { InfiniteScrollComponent } from './infinite-scroll/infinite-scroll.component';
import { CreatePostModalWindowComponent } from './create-post-modal-window/create-post-modal-window.component';
import { PostModalWindowComponent } from './post-modal-window/post-modal-window.component';
import { NotificationComponent } from './notification/notification.component';


@NgModule({
  declarations: [
    ModalWindowComponent,
    RelativeTimePipe,
    CarouselComponent,
    CommentComponent,
    ImagePlaceholderPipe,
    InfiniteScrollComponent,
    CreatePostModalWindowComponent,
    PostModalWindowComponent,
    NotificationComponent,
  ],
  exports: [
    ModalWindowComponent,
    RelativeTimePipe,
    CarouselComponent,
    CommentComponent,
    ImagePlaceholderPipe,
    InfiniteScrollComponent,
    CreatePostModalWindowComponent,
    PostModalWindowComponent,
    NotificationComponent,
  ],
    imports: [
        CommonModule,
        AngularSvgIconModule,
        FormsModule,
        RouterLink,
    ]
})
export class SharedModule {
}
