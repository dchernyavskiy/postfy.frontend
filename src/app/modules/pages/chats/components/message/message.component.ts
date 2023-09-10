import {Component, Input} from '@angular/core';
import {bounceInLeftOnEnterAnimation, bounceInRightOnEnterAnimation} from "angular-animations";
import {MessageBriefDto} from "../../../../../api/network/models/message-brief-dto";

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
  animations:[
    bounceInRightOnEnterAnimation(),
    bounceInLeftOnEnterAnimation(),
  ]
})
export class MessageComponent {
  @Input() isSent: boolean = false;
  @Input() isMedia: boolean = false;
  @Input() text: string = '';
  @Input() message: MessageBriefDto = {};
}
