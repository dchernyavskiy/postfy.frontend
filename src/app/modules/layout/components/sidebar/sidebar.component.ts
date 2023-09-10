import {Component} from '@angular/core';
import {NetworkApiClient, UserDto} from "../../../../api/network-api";
import {AuthService} from "../../../../core/services/auth.service";
import {Router} from "@angular/router";
import {fadeInUpOnEnterAnimation, fadeOutDownOnLeaveAnimation} from "angular-animations";

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

  constructor(private readonly networkApiClient: NetworkApiClient, private readonly authService: AuthService, private readonly router: Router) {
    this.networkApiClient.getProfile(undefined).subscribe(res => {
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
