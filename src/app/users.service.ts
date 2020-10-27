import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  SERVER_URL = 'https://online-directory-test.herokuapp.com/users';
  constructor(private client: HttpClient) { }

  getUsers():Promise<any> {
    return this.client.get<any>(this.SERVER_URL).toPromise();
  }
}
