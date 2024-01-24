import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import User from '../models/User';
import { BehaviorSubject, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  currentUser=new BehaviorSubject<{user:User}>(null);
  constructor(public http:HttpClient) { }
  baseRouteUrl=`${environment.baseUrl}/user`
  login(name: string, password: string){
    let user = { Name: name, Password: password }
        return this.http.post<object>(`${this.baseRouteUrl}/Login/?u=${user}`, user);
  }
  register(user:User){
    return this.http.post<object>(`${this.baseRouteUrl}/Register/?u=${user}`, user)
  }
  saveInStorage(user) {
    localStorage.setItem("currentUser", JSON.stringify(user));
  }
  getFromStorage() {
    let u = localStorage.getItem("currentUser");
    if (!u)
      return null;
    return JSON.parse(u);
  }
  removeFromStorage() {
    localStorage.removeItem("currentUser");
  }
}
