import { Component } from '@angular/core';
import {CreatePostModalWindowService} from "./core/services/create-post-modal-window.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'postfy';

  constructor(readonly createPostModalWindowService: CreatePostModalWindowService) {
  }
}
