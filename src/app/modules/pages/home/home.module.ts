import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HomeRoutingModule} from './home-routing.module';
import {HomeComponent} from './home.component';
import {StoriesComponent} from "./components/stories/stories.component";
import {AngularSvgIconModule} from "angular-svg-icon";
import {PostComponent} from './components/post/post.component';
import {FormsModule} from "@angular/forms";
import {SharedModule} from "../../shared/shared.module";


@NgModule({
  declarations: [
    HomeComponent,
    StoriesComponent,
    PostComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    AngularSvgIconModule,
    FormsModule,
    SharedModule,
  ]
})
export class HomeModule {
}
