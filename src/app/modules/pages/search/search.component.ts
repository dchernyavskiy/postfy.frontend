import {Component} from '@angular/core';
import {NetworkApiClient, UserBriefDto} from "../../../api/network-api";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  users: UserBriefDto[] = [];
  query: string = '';

  constructor(private readonly networkApiClient: NetworkApiClient) {
  }

  getUsers(query: string) {
    this.networkApiClient.searchUsers(query).subscribe(res => {
      this.users = res.users!;
      console.log(res)
    })
  }
}
