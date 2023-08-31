import {Component, Input} from '@angular/core';
import {MediaBriefDto} from "../../../api/network-api";

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {
  ngOnInit(): void {
  }

  @Input() images: MediaBriefDto[] = [];
  @Input() limit: number = 1;
  @Input() offset: number = 0;

  previous() {
    this.offset = this.offset - 1
  }

  next() {
    this.offset = this.offset + 1
  }
}
