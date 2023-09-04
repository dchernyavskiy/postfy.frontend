import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeopleRoutingModule } from './people-routing.module';
import { PeopleComponent } from './people.component';
import {AngularSvgIconModule} from "angular-svg-icon";
import {SharedModule} from "../../shared/shared.module";


@NgModule({
  declarations: [
    PeopleComponent
  ],
  imports: [
    CommonModule,
    PeopleRoutingModule,
    AngularSvgIconModule,
    SharedModule
  ]
})
export class PeopleModule { }
