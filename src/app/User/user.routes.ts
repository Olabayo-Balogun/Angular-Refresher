import { ProfileComponent } from './profile.component';

//The route for the user profile will be "/user/profile" because the profile is only found within the user module and typically a profile is dependent on a user.
export const userRoutes = [{ path: 'profile', component: ProfileComponent }];
