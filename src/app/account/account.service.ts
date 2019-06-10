import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiHelperService } from '../core/api/api-helper.service';
import { StorageService } from '../core/storage/storage.service';
import { CreateAccountRequest } from './models/create-account-request.interface';
import { User } from '../shared/models/user.interface';
import { UserToken } from './models/user-token.interface';
import { LoginRequest } from './models/login-request.interface';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private api: ApiHelperService,
    private storage: StorageService) { }

  login(req: LoginRequest): Observable<UserToken> {
    return this.api.post('users/login', req)
  }

  logout(): Observable<undefined> {
    return this.api.post('users/logout', {});
  }

  createAccount(req: CreateAccountRequest): Observable<UserToken> {
    return this.api.post('users', req)
  }

  getUser(): Observable<User> {
    return this.api.get('users');
  }
}
