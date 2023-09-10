import {Component, Input} from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'app-modal-window',
  templateUrl: './modal-window.component.html',
  styleUrls: ['./modal-window.component.scss']
})
export class ModalWindowComponent {
  @Input() isHidden$: BehaviorSubject<boolean> = new BehaviorSubject(true);
}
