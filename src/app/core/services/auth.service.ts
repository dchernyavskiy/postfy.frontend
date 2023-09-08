import {Injectable} from '@angular/core';
import {IdentityApiClient, LoginResponse} from "../../api/identity-api";
import {catchError, map, mergeAll, Observable, of, switchAll, switchMap, throwIfEmpty, timer} from "rxjs";
import jwtDecode from "jwt-decode";
import {calculateThresholds} from "@angular-devkit/build-angular/src/utils/bundle-calculator";
import {HttpHeaders} from "@angular/common/http";

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

  constructor(private readonly identityApiClient: IdentityApiClient) {
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
    return this.identityApiClient.login({
      userNameOrEmail: userNameOrEmail,
      password: password,
      remember: true
    }).pipe(
      map(res => {
        this.setup(res)


        return true;
      }),
      catchError(err => of(false)))
  }

  logout() {
    return this.identityApiClient.logout(undefined!).pipe(map(_ => {
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
    return this.identityApiClient.refreshToken({
      accessToken: this.getToken()!,
      refreshToken: this.getRefreshToken()!
    }).pipe(map(res => {
        this.setup(res)
        return true
      }),
      catchError(err => {
        return of(false)
      }))
  }

  loginWithGoogle(credential: string) {
    return this.identityApiClient.loginWithGoogle({credential: credential}).pipe(map(res => {
      this.setup(res)
      return true;
    }), catchError(err => of(false)));
  }
}
