import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'selector-name',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  userName;
  password;
  constructor(private authService: AuthService, private router: Router) {}

  login(formValues) {
    // console.log(formValues);
    this.authService.loginUser(formValues.userName, formValues.password);
    //The router navigate method below is what will redirect the user when they click the login button (after being authenticated anyway).
    this.router.navigate(['events'])
  }

  cancel() {
     //The router navigate method below is what will redirect the user when they click the cancel button. You can choose to redirect them someplace else.
    this.router.navigate(['events'])
  }
}
