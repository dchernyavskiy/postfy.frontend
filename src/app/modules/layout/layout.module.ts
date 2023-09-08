import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {LayoutRoutingModule} from './layout-routing.module';
import {SidebarComponent} from './components/sidebar/sidebar.component';
import {LayoutComponent} from './layout.component';
import {AngularSvgIconModule} from "angular-svg-icon";
import { MenuComponent } from './components/sidebar/menu/menu.component';
import {SharedModule} from "../shared/shared.module";


@NgModule({
  declarations: [
    SidebarComponent,
    LayoutComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    AngularSvgIconModule,
    SharedModule,
  ]
})
export class LayoutModule {
}
