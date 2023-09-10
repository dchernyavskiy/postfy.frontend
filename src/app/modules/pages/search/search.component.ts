import {Component} from '@angular/core';
import {UserBriefDto} from "../../../api/network/models/user-brief-dto";
import {UsersService} from "../../../api/network/services/users.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  users: UserBriefDto[] = [];
  query: string = '';

  constructor(private readonly usersService: UsersService) {
  }

  getUsers(query: string) {
    this.usersService.searchUsers({}).subscribe(res => {
      this.users = res.users!;
    })
  }
}
