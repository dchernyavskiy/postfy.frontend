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

    return next.handle(request)
      .pipe(catchError(err => {
        if (err.status == 500 || err.status == 401) {
          return this.authService
            .refreshToken()
            .pipe(switchMap(res => {
              const req = request.clone({
                headers: request.headers.delete("Authorization").append("Authorization", 'Bearer ' + res.accessToken!)
              })
              console.log(req)
              return next.handle(req)
            }))
        }
        return next.handle(request);
      }));
  }
}
