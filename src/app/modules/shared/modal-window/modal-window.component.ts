import {Component, Input, TemplateRef} from '@angular/core';
import {FileParameter, NetworkApiClient} from "../../../api/network-api";
import {BehaviorSubject, map, mergeMap, switchMap,} from "rxjs";
import {fi} from "date-fns/locale";
import {ModalWindowService} from "../../../core/services/modal-window.service";

@Component({
  selector: 'app-modal-window',
  templateUrl: './modal-window.component.html',
  styleUrls: ['./modal-window.component.scss']
})
export class ModalWindowComponent {
  @Input() isHidden$: BehaviorSubject<boolean> = new BehaviorSubject(true);
}
