import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserDTO } from '../model/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private BASE_URL = 'http://localhost:8080/api/users';

  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get<UserDTO[]>(this.BASE_URL);
  }
}
