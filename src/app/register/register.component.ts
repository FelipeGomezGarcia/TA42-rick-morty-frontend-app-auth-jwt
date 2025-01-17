import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form :any = {
    username: null,
    email: null,
    password: null
  }
  isSuccessful=false;
  isSignUpFailed= false;
  errorMessage= '';

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onSubmit():void{
    const {username, email, password} = this.form;

    this.authService.register(username,password,email).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      error =>{
        this.errorMessage = error.message;
        this.isSignUpFailed = true;
      }
    )
  }

}
