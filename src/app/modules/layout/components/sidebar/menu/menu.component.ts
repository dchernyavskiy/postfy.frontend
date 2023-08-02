import {Component} from '@angular/core';
import {SubMenuItem} from "../../../../../core/models/menu.model";

@Component({
  selector: 'div[app-menu]',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  items: SubMenuItem[] = [
    {
      icon: 'assets/icons/solid/home.svg',
      label: 'Home',
      route: '',
    },
    {
      icon: 'assets/icons/solid/search.svg',
      label: 'Search',
      route: '',
    },
    {
      icon: 'assets/icons/solid/compass.svg',
      label: 'Explore',
      route: '',
    },
    {
      icon: 'assets/icons/solid/message-circle.svg',
      label: 'Messages',
      route: '',
    },
    {
      icon: 'assets/icons/solid/shopping-bag.svg',
      label: 'Shop',
      route: '',
    },
    {
      icon: 'assets/icons/solid/users.svg',
      label: 'People',
      route: '',
    },
    {
      icon: 'assets/icons/solid/plus-circle.svg',
      label: 'Create',
      route: '',
    },
    {
      icon: 'assets/icons/solid/user.svg',
      label: 'Profile',
      route: '',
    },
  ]
}
