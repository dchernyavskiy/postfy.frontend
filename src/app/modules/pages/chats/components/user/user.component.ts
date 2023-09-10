import {Component, Input} from '@angular/core';
import {ChatBriefDto} from "../../../../../api/network/models/chat-brief-dto";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  @Input() isOnline: boolean = false;
  @Input() isLastMessageRead: boolean = false;
  @Input() chat: ChatBriefDto = {};
}
