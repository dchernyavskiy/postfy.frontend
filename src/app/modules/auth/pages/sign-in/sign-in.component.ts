import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../../../core/services/auth.service";
import {Router} from "@angular/router";
import {CredentialResponse, PromptMomentNotification} from "google-one-tap";
import {environment} from "../../../../../environments/environment";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  userNameOrEmail: string = '';
  password: string = '';

  constructor(private readonly authService: AuthService, private readonly router: Router) {
  }

  login() {
    this.authService.login(this.userNameOrEmail, this.password).subscribe(res => {
      if (res) this.router.navigate(['']);
    })
  }

  ngOnInit(): void {
    // @ts-ignore
    console.log(google)
    // @ts-ignore
    window.onGoogleLibraryLoad = () => {
      // @ts-ignore
      google.accounts.id.initialize({
        client_id: environment.GOOGLE_CLIENT_ID,
        callback: this.handleCredentialsResponse.bind(this),
        auto_select: false,
        cancel_on_tap_outside: true
      })
      // @ts-ignore
      google.accounts.id.renderButton(
        // @ts-ignore
        document.getElementById('google_button')
        , {theme: 'outline', size: 'large', width: '100%'}
      )

      // @ts-ignore
      google.accounts.id.prompt((notification: PromptMomentNotification) => {

      });
    }
  }

  async handleCredentialsResponse(response: CredentialResponse) {
    console.log('in handleCredentialsResponse')
    await this.authService.loginWithGoogle(response.credential).subscribe(
      (res: any) => {
        if (res) this.router.navigate(['']);
      }
    )
  }
}
