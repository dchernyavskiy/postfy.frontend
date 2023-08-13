import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import {AngularSvgIconModule} from "angular-svg-icon";
import { PostComponent } from './post/post.component';
import { MyProfileComponent } from './my-profile/my-profile.component';


@NgModule({
  declarations: [
    ProfileComponent,
    PostComponent,
    MyProfileComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    AngularSvgIconModule
  ]
})
export class ProfileModule { }
