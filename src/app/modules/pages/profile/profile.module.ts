import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import {AngularSvgIconModule} from "angular-svg-icon";
import { PostComponent } from './post/post.component';


@NgModule({
  declarations: [
    ProfileComponent,
    PostComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    AngularSvgIconModule
  ]
})
export class ProfileModule { }
