import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent {
  @Input() isSent: boolean = false;
  @Input() isMedia: boolean = false;
  @Input() text: string = '';
}
