import {Injectable} from '@angular/core';
import {
  BehaviorSubject,
  catchError,
  map,
  of,
} from "rxjs";
import {IdentityService} from "../../api/identity/services/identity.service";
import {LoginResponse} from "../../api/identity/models/login-response";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _token = 'token';
  private _refreshToken = 'refresh-token';
  private _firstName = 'first-name';
  private _lastName = 'last-name';
  private _username = 'username';
  private _userId = 'user-id';
  signedInWithGoogle$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private readonly identityService: IdentityService) {
  }

  isAuthorized(): boolean {
    const token = this.getToken();
    return token != null && token != "";
  }

  getRefreshToken(): string | null {
    return localStorage.getItem(this._refreshToken)
  }

  getToken(): string | null {
    return localStorage.getItem(this._token)
  }

  getUserId() {
    return localStorage.getItem(this._userId)
  }

  login(userNameOrEmail: string, password: string) {
    return this.identityService.login({
      body:
        {
          userNameOrEmail: userNameOrEmail,
          password: password,
          remember: true
        }
    }).pipe(
      map(res => {
        this.setup(res)
        this.signedInWithGoogle$.next(false);

        return true;
      }),
      catchError(err => of(false)))
  }

  logout() {
    return this.identityService.logout().pipe(map(_ => {
      this.unsetup();
    }));
  }

  private setup(response: LoginResponse) {
    localStorage.setItem(this._token, response.accessToken!)
    localStorage.setItem(this._refreshToken, response.accessToken!)
    localStorage.setItem(this._firstName, response.firstName!)
    localStorage.setItem(this._lastName, response.lastName!)
    localStorage.setItem(this._username, response.username!)
    localStorage.setItem(this._userId, response.userId!)
  }

  private unsetup() {
    localStorage.setItem(this._token, '')
    localStorage.setItem(this._refreshToken, '')
    localStorage.setItem(this._firstName, '')
    localStorage.setItem(this._lastName, '')
    localStorage.setItem(this._username, '')
    localStorage.setItem(this._userId, '')
  }

  refreshToken() {
    return this.identityService.refreshToken({
      body: {
        accessToken: this.getToken()!,
        refreshToken: this.getRefreshToken()!
      }
    }).pipe(map(res => {
      this.setup(res)
      return res
    }))
  }

  loginWithGoogle(credential: string) {
    return this.identityService.loginWithGoogle({
      body: {
        credential: credential
      }
    }).pipe(map(res => {
      this.setup(res)
      this.signedInWithGoogle$.next(true);
      return true;
    }), catchError(err => of(false)));
  }
}
