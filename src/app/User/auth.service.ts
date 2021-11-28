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

  updateCurrentUser(firstName: string, lastName: string) {
    // Note that we're hard coding the update feature, the realistic implementation will be different
    this.currentUser.firstName = firstName;
    this.currentUser.lastName = lastName;
  }
}
