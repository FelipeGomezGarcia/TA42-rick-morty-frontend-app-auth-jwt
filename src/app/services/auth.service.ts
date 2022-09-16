import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const AUTH_URL = 'https://jmm-spring-api-h2-angular.herokuapp.com/';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user:any = null;
  constructor(private http:HttpClient) { }

  login(username: string,password:string):Observable<any>{

    this.user = null;

    this.user = {
      "username": username,
      "password": password
    };

    return this.http.post(AUTH_URL + 'login', JSON.stringify(this.user), { headers: { 'Content-Type': 'application/json'}});
  }

  register(username:string,password:string,email:string):Observable<any>{
    return this.http.post(AUTH_URL + 'users',{
      username,
      email,
      password
    },httpOptions);
  }

  getUser(username:string):Observable<any>{
    return this.http.get(AUTH_URL + 'users/' + username);
  }
}
