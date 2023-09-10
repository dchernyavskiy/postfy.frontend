import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import { PostComponent } from './post.component';
import {SharedModule} from "../../shared/shared.module";
import {AngularSvgIconModule} from "angular-svg-icon";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    PostComponent
  ],
  imports: [
    CommonModule,
    PostRoutingModule,
    SharedModule,
    AngularSvgIconModule,
    ReactiveFormsModule,
    FormsModule,
    NgOptimizedImage
  ]
})
export class PostModule { }
