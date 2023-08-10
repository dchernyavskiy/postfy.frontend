import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CreatePostModalWindowService {
  public isHidden$: any = new BehaviorSubject(true);

  constructor() {
  }
}
