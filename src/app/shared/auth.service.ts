import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserLoginDTO, UserRegisterDTO } from '../model/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private BASE = 'http://localhost:8080/api/auth';
  private LOGIN_URL = '/login';
  private REGISTER_URL = '/register';

  private USERNAME = '';

  constructor(private http: HttpClient) {}

  isLoggedIn() {
    return !(this.USERNAME == '');
  }

  login(user: UserLoginDTO) {
    return this.http.post<UserLoginDTO>(this.BASE + this.LOGIN_URL, user);
  }
  register(user: UserRegisterDTO) {
    return this.http.post<UserRegisterDTO>(this.BASE + this.REGISTER_URL, user);
  }

  setUsername(username: string) {
    this.USERNAME = username;
  }

  getUsername() {
    return this.USERNAME;
  }
}
