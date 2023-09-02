import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatsRoutingModule } from './chats-routing.module';
import { ChatsComponent } from './chats.component';
import {AngularSvgIconModule} from "angular-svg-icon";
import { UserComponent } from './components/user/user.component';
import { MessageComponent } from './components/message/message.component';
import {FormsModule} from "@angular/forms";
import {SharedModule} from "../../shared/shared.module";


@NgModule({
  declarations: [
    ChatsComponent,
    UserComponent,
    MessageComponent
  ],
  imports: [
    CommonModule,
    ChatsRoutingModule,
    AngularSvgIconModule,
    FormsModule,
    SharedModule
  ]
})
export class ChatsModule { }
