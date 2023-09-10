import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpHeaders
} from '@angular/common/http';
import {catchError, Observable, switchMap} from 'rxjs';
import {AuthService} from "../services/auth.service";

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(private readonly authService: AuthService) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    request = this.addAuthHeader(request)
    return next.handle(request)
      .pipe(catchError(err => {
        if (err.status == 500 || err.status == 401) {
          return this.authService
            .refreshToken()
            .pipe(switchMap(res => {
              request = this.addAuthHeader(request)
              return next.handle(request)
            }))
        }
        return next.handle(request);
      }));
  }

  private addAuthHeader(request: HttpRequest<unknown>) {
    return request.clone(
      {
        headers: request.headers.delete("Authorization").append("Authorization", 'Bearer ' + this.authService.getToken())
      }
    )
  }
}
