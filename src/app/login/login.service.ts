import { Injectable } from '@angular/core';
import { ApiHelperService } from '../core/api-helper.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private api: ApiHelperService) { }

  login(req: any): Observable<any> {
    return this.api.post('login', req);
  }
}
