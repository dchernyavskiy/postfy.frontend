import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import {AngularSvgIconModule} from "angular-svg-icon";
import { PostComponent } from './post/post.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import {SharedModule} from "../../shared/shared.module";


@NgModule({
  declarations: [
    ProfileComponent,
    PostComponent,
    MyProfileComponent
  ],
    imports: [
        CommonModule,
        ProfileRoutingModule,
        AngularSvgIconModule,
        SharedModule
    ]
})
export class ProfileModule { }
