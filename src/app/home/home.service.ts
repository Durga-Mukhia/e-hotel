import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) {
  }

  getUsers() {
    return this.http.get('http://localhost:3000/users');
  }

  createUsers(user) {
    return this.http.post('http://localhost:3000/users', user);
  }

  logedIn() {
    return !!localStorage.getItem('token');
  }

  getToken() {
    return localStorage.getItem('token');
  }

  logout(){
    return localStorage.removeItem('token');
  }
}
