import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HomeRoutingModule} from './home-routing.module';
import {HomeComponent} from './home.component';
import {StoriesComponent} from "./components/stories/stories.component";
import {AngularSvgIconModule} from "angular-svg-icon";


@NgModule({
  declarations: [
    HomeComponent,
    StoriesComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    AngularSvgIconModule,
  ]
})
export class HomeModule {
}
