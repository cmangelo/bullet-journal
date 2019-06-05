import { Injectable, Inject } from '@angular/core';

import { LOCAL_STORAGE, StorageService as ngxStorage } from 'ngx-webstorage-service';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(@Inject(LOCAL_STORAGE) private ngxStorage: ngxStorage) { }

  public get(key: string): any {
    return this.ngxStorage.get(key);
  }

  public save(key: string, value: any): void {
    this.ngxStorage.set(key, value);
  }

  public destroy(key: string): void {
    this.ngxStorage.remove(key);
  }
}
