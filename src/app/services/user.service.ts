import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppComponent } from '../app.component';

const API_URL = 'https://jmm-spring-api-h2-angular.herokuapp.com/';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  getPublishContent(): Observable<any>{
    return this.http.get(API_URL+'all',{responseType: 'text'});
  }

  getUserBoard():Observable<any>{
    return this.http.get(API_URL + 'user', {responseType: 'text'});
  }

  getAdminBoard():Observable<any>{
    return this.http.get(API_URL + 'admin',{responseType:'text'});
  }
}
