import {Component} from '@angular/core';
import {ModalWindowService} from "./core/services/modal-window.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'postfy';

  constructor(readonly modalWindowService: ModalWindowService) {
  }
}
