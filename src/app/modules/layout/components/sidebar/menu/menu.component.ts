import {Component} from '@angular/core';
import {SubMenuItem} from "../../../../../core/models/menu.model";
import {ModalWindowService} from "../../../../../core/services/modal-window.service";

@Component({
  selector: 'div[app-menu]',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  constructor(private readonly modalWindowService: ModalWindowService) {
    this.items = [
      {
        icon: 'assets/icons/solid/home.svg',
        label: 'Home',
        route: '',
      },
      {
        icon: 'assets/icons/solid/search.svg',
        label: 'Search',
        route: '/app/search',
      },
      {
        icon: 'assets/icons/solid/compass.svg',
        label: 'Explore',
        route: '/app/explore',
      },
      {
        icon: 'assets/icons/solid/message-circle.svg',
        label: 'Messages',
        route: '/app/chats',
      },
      {
        icon: 'assets/icons/solid/shopping-bag.svg',
        label: 'Shop',
        route: '',
      },
      {
        icon: 'assets/icons/solid/bookmark.svg',
        label: 'Favorites',
        route: '/app/favorites',
      },
      {
        icon: 'assets/icons/solid/users.svg',
        label: 'People',
        route: '/app/people',
      },
      {
        icon: 'assets/icons/solid/plus-circle.svg',
        label: 'Create',
        route: '',
        onClick: () => {
          this.modalWindowService.isCreatePostModalWindowHidden$.next(false);
        }
      },
      {
        icon: 'assets/icons/solid/user.svg',
        label: 'Profile',
        route: '/app/profile',
      },
    ]
  }

  items: SubMenuItem[] = []
}
