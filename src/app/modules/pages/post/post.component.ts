import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {
  constructor(private readonly route: ActivatedRoute) {
    route.params.subscribe(res =>{
      console.log(res)
    })
  }
}
