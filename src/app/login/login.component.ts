import { Component } from '@angular/core';
import {LoginService} from './login.service';
import {User} from '../models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent {
  public user: User;

  constructor(private loginService: LoginService) {
    this.user = new User();
  }

  validateLogin() {
console.log("username" ,this.user.username);
console.log("password", this.user.password);
    if(this.user.username && this.user.password) {
      console.log('dentro 2');
      this.loginService.validateLogin(this.user).subscribe(result => {
        console.log('result is ', result);
      }, error => {
        console.log('error is ', error);
      });
    } else {
      alert('enter user name and password');
    }
  }

}


