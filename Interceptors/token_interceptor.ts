import { Injectable } from "@angular/core";
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from "@angular/common/http";
import { AuthService } from "../Services/auth.service";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/internal/operators";
import { Router } from "@angular/router";
import { NotifierService } from "angular-notifier";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  token: string;
  constructor(
    private notifier: NotifierService,
    public auth: AuthService,
    private router: Router
  ) {}
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.token = localStorage.getItem("ParkAccessToken");
    if (this.token) {
      request = request.clone({
        headers: request.headers.set("Authorization", this.token)
      });
    } else {
      this.router.navigateByUrl("/login");
    }
    request = request.clone({
      headers: request.headers.set("Accept", "application/json")
    });
    const _this = this;
    return next.handle(request).pipe(
      catchError(error => {
        let errorMessage = "";
        if (error.status === 403) {
          this.router.navigateByUrl("/login");
        } else if (error.status === 400) {
          _this.notifier.notify('error', error.error.msg);
        } else if (error.status === 500) {
          _this.notifier.notify('error', `please contact us `);
        }

        if (error.error instanceof ErrorEvent) {
          // client-side error
          errorMessage = `Error: ${error.error.message}`;
        } else {
          // server-side error
          errorMessage = `Error Code: ${error.status}\nMessage: ${
            error.error.msg
          }`;
        }
        _this.notifier.notify("error", error.error.message);
        //this.router.navigateByUrl('/login');
        return throwError(errorMessage);
      })
    );
  }
}
