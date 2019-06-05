import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpErrorResponse, HttpInterceptor } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { StorageService } from '../storage/storage.service';

@Injectable({
  providedIn: 'root'
})
export class HttpConfigInterceptor implements HttpInterceptor {

  constructor(private router: Router,
    private storage: StorageService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let token = this.storage.get("token");
    if (token) {
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
    }

    return next.handle(req)
      .pipe(
        tap((response: HttpEvent<any>) => {
          if (response instanceof HttpResponse) {
            let updatedToken = response.headers.get("Update-Bearer");
            if (updatedToken) {
              this.storage.save("token", updatedToken);
            }
          }
        }, (err: any) => {
          if (err instanceof HttpErrorResponse) {
            if (err.status === 401) {
              this.storage.destroy("token");
              if (!this.storage.get("redirectOnLoginUrl"))
                this.storage.save("redirectOnLoginUrl", this.router.url);
              this.router.navigate(["/login"]);
            }
          }
        }));
  }
}
