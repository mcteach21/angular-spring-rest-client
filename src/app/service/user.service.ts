import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../model/user';
import { Observable } from 'rxjs/Observable';

@Injectable({ providedIn: 'root' })
export class UserService {

  private usersUrl: string;

  constructor(private http: HttpClient) {
      this.usersUrl = 'http://localhost:8080/'; //spring users list url (Rest Controller)
  }

  public findAll(): Observable<User[]> {
      return this.http.get<User[]>(this.usersUrl+'list');
  }

  public save(user: User) {
      console.log(user);
      return this.http.post<User>(this.usersUrl+'add', user);
  }
}
