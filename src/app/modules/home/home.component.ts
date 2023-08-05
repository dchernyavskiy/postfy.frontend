import {Component} from '@angular/core';
import {NetworkApiClient} from "../../api/network-api";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private readonly networkClient: NetworkApiClient) {
    console.log('send req')
    this.networkClient.getPosts(
      undefined,
      undefined,
      undefined,
      1,
      10
    ).subscribe(res => {
      console.log('sss')
    })
  }
}
