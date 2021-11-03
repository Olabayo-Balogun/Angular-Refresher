import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { userRoutes } from './user.routes';
import { ProfileComponent } from './profile.component';

@NgModule({
  imports: [
    //We only import browser module within the app module
    CommonModule,
    //We use RouterModule.forRoot only for our app module
    RouterModule.forChild(userRoutes),
  ],
  exports: [],
  declarations: [ProfileComponent],
  providers: [],
})
export class UserModule {}
