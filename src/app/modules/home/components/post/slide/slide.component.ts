import {Component, Input, OnInit} from '@angular/core';
import {of} from "rxjs";

@Component({
  selector: 'div[app-slide]',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.scss']
})
export class SlideComponent implements OnInit {
  ngOnInit(): void {
  }

  @Input() images: any[] = [];
  @Input() limit: number = 1;
  @Input() offset: number = 0;

  previous() {
    this.offset = this.offset - 1
  }

  next() {
    this.offset = this.offset + 1
  }
}
