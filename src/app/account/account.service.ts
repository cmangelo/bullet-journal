import { Injectable } from '@angular/core';
import { ApiHelperService } from '../core/api/api-helper.service';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { StorageService } from '../core/storage/storage.service';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private api: ApiHelperService,
    private storage: StorageService) { }

  login(req: any): Observable<any> {
    return this.api.post('users/login', req)
      .pipe(tap(res => this.storage.save('token', res.token)));
  }

  logout(req: any): Observable<any> {
    return this.api.post('users/logout', req)
      .pipe(tap(() => this.storage.destroy('token')));
  }

  createAccount(req: any): Observable<any> {
    return this.api.post('users', req)
      .pipe(tap(res => this.storage.save('token', res.token)));
  }
}
