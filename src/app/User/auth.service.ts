import { Injectable } from '@angular/core';
import { IUser } from './user.model';

@Injectable()
export class AuthService {
  currentUser: IUser;
  loginUser(userName: string, password: string) {
    //We're hardcoding user details for the purpose of this tutorial in order to simulate the login process.
    this.currentUser = {
      id: 1,
      userName: userName,
      firstName: 'John',
      lastName: 'Papa',
    };
  }

  isAuthenticated() {
    return !!this.currentUser;
  }
}
