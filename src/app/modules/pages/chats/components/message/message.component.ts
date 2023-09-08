import {Component, Input} from '@angular/core';
import {MessageBriefDto} from "../../../../../api/network-api";
import {bounceInLeftOnEnterAnimation, bounceInRightOnEnterAnimation} from "angular-animations";

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
