import {Component} from '@angular/core';
import {AuthService} from "../../../../core/services/auth.service";
import {Router} from "@angular/router";
import {fadeInUpOnEnterAnimation, fadeOutDownOnLeaveAnimation} from "angular-animations";
import {UserDto} from "../../../../api/network/models/user-dto";
import {UsersService} from "../../../../api/network/services/users.service";

@Component({
  selector: 'div[app-sidebar]',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  animations: [
    fadeInUpOnEnterAnimation(),
    fadeOutDownOnLeaveAnimation()
  ]
})
export class SidebarComponent {
  user: UserDto = {};

  constructor(private readonly usersService: UsersService,
              private readonly authService: AuthService,
              private readonly router: Router) {
    this.usersService.getProfile().subscribe(res => {
      this.user = res.user!;
    })
  }

  logout() {
    this.authService.logout().subscribe(_ => {
      this.router.navigate(['/auth']).then(() => {
        window.location.reload()
      })
    })
  }
}
