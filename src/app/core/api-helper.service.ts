import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

const base = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class ApiHelperService {

  constructor(private http: HttpClient) { }

  get<T>(url: string, params?: any): Observable<T> {
    return this.http.get<T>(base + url, { params });
  }

  post<T>(url: string, body: any): Observable<T> {
    return this.http.post<T>(base + url, body);
  }

  put<T>(url: string, body: any): Observable<T> {
    return this.http.put<T>(base + url, body);
  }
}
