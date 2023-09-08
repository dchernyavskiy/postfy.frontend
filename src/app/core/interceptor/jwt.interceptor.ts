import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import {catchError, Observable, switchMap} from 'rxjs';
import {AuthService} from "../services/auth.service";

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(private readonly authService: AuthService) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    return next.handle(request)
      .pipe(catchError(err => {
        if (err.status === 500) {
          return this.authService
            .refreshToken()
            .pipe(switchMap(res => next.handle(request)))
          //   .subscribe(res => {
          //   console.log(res)
          // })
        }
        return next.handle(request);
      }));
  }
}
