import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ModalWindowComponent} from './modal-window/modal-window.component';
import {AngularSvgIconModule} from "angular-svg-icon";
import {FormsModule} from "@angular/forms";
import {RelativeTimePipe} from './pipes/relative-time.pipe';
import {CarouselComponent} from './carousel/carousel.component';
import {CommentComponent} from "./comment/comment.component";


@NgModule({
  declarations: [
    ModalWindowComponent,
    RelativeTimePipe,
    CarouselComponent,
    CommentComponent,
  ],
  exports: [
    ModalWindowComponent,
    RelativeTimePipe,
    CarouselComponent,
    CommentComponent,
  ],
  imports: [
    CommonModule,
    AngularSvgIconModule,
    FormsModule
  ]
})
export class SharedModule {
}
