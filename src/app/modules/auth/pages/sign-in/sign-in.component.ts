import {Component} from '@angular/core';
import {AuthService} from "../../../../core/services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {
  userNameOrEmail: string = '';
  password: string = '';

  constructor(private readonly authService: AuthService, private readonly router: Router) {
  }

  login() {
    this.authService.login(this.userNameOrEmail, this.password).subscribe(res => {
      if (res) this.router.navigate(['']);
    })
  }
}
