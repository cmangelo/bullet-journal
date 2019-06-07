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
  }

  logout(req: any): Observable<any> {
    return this.api.post('users/logout', req)
  }

  createAccount(req: any): Observable<any> {
    return this.api.post('users', req)
  }

  getUser(): Observable<any> {
    return this.api.get('users');
  }
}
