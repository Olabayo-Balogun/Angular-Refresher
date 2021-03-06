import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { userRoutes } from './user.routes';
import { ProfileComponent } from './profile.component';
import { LoginComponent } from './login.component';

@NgModule({
  imports: [
    //We only import browser module within the app module
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    //We use RouterModule.forRoot only for our app module
    RouterModule.forChild(userRoutes),
  ],
  exports: [],
  declarations: [ProfileComponent, LoginComponent],
  providers: [],
})
export class UserModule {}
