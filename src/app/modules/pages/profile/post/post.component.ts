import {AfterViewInit, Component, Input} from '@angular/core';
import {PostBriefDto} from "../../../../api/network-api";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements AfterViewInit {
  @Input() post: PostBriefDto = {};

  ngAfterViewInit(): void {
  }

}
