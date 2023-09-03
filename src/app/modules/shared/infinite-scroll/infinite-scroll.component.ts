import {Component, EventEmitter, HostListener, Input, Output} from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'div[app-infinite-scroll]',
  templateUrl: './infinite-scroll.component.html',
  styleUrls: ['./infinite-scroll.component.scss']
})
export class InfiniteScrollComponent {
  @Input() stopperId: string = '';
  @Input() isBlocking$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  @Output() scroll = new EventEmitter<void>();


  @HostListener('wheel', ['$event'])
  onScroll($event: any) {
    const target = document.getElementById(this.stopperId)
    if (target) {
      const rect = target.getBoundingClientRect()
      const isVisible = rect.top >= 0 && rect.bottom - 10 <= window.innerHeight
      if (isVisible && !this.isBlocking$.value) {
        this.isBlocking$.next(true)
        this.scroll.emit();
      }
    }
  }
}
