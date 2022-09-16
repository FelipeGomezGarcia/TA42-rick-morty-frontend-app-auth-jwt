import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';
const ROLE_KEY = 'auth-role';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {


  constructor(private authService: AuthService) { }

  signOut(): void{
    window.sessionStorage.clear();
  }

  public saveToken(token:string):void{
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public getToken():string|null{
    return window.sessionStorage.getItem(TOKEN_KEY);
  }

  public saveUser(user:any):void{
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY,JSON.stringify(user));
    this.setRoles();
  }

  public getUser():any{
    const user = window.sessionStorage.getItem(USER_KEY);
    if (user) {
      return JSON.parse(user);
    }
    return {};
  }

  public setRoles(){
    const user = this.getUser();
    this.authService.getUser(user).subscribe(
      data =>{
        console.log(data)
        window.sessionStorage.removeItem(ROLE_KEY)
        window.sessionStorage.setItem(ROLE_KEY,JSON.stringify(data["role"]))
      }

    )

  }

  getRoles() {
    return window.sessionStorage.getItem(ROLE_KEY);
  }
}
