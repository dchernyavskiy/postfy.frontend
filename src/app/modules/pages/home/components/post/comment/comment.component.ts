import {Component, Input} from '@angular/core';
import {Comment} from "../../../../../../api/network-api";

@Component({
  selector: 'div[app-comment]',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent {
  @Input() comment: Comment = {};
}
