import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SharedService {
  constructor(private http: HttpClient) { }
  getUsers() {
    return this.http.get('http://localhost:3000/users');
  }
  updateAccessPermission(id, user) {
   return this.http.put(`http://localhost:3000/users/${id}`, user);
  }
}
