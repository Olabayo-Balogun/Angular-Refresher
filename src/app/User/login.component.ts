import { Component } from '@angular/core';

@Component({
  selector: 'selector-name',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  userName;
  password;

  login(formValues) {
    console.log(formValues);
  }
}
