import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public userData;

  constructor(private http: HttpClient) { }

  getOnlineData() {
    return this.http.get('https://randomuser.me/api/?results=10');
  }

  getCachedData(): any[] {
    return JSON.parse(localStorage.data).results;
  }

  isExist(uuid): boolean {
    const user = this.getCachedData().find((users) => users.login.uuid == uuid);
    return user ? true : false;
  }

}
