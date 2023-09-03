import {Injectable, TemplateRef} from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ModalWindowService {
  isCreatePostModalWindowHidden$: BehaviorSubject<boolean> = new BehaviorSubject(true);
  isPostModalWindowHidden$: BehaviorSubject<boolean> = new BehaviorSubject(true);
}
