import { Routes } from '@angular/router';

import{
  EventsListResolver,
  EventsListComponent,
  EventDetailsComponent,
  EventRouteActivator,
  CreateEventComponent
}
from './events/index' 

import { Error404Component } from './errors/404.component';

export const appRoutes: Routes = [
  //The paths specified below show the name of the url, the location of the component.
  //if the url being called matches the name of URL, routing will call the associated components.
  //Routes provides type safety and flag compile-time errors.
  //The "path: 'events/new'" comes before id so Angular doesn't make the mistake of thinking the "new" is an id parameter neither does Angular make "path: 'events/new'" unreachable.
  {
    path: 'events/new',
    component: CreateEventComponent,
    canDeactivate: ['canDeactivateCreateEvent'],
  },
  {
    path: 'events',
    component: EventsListComponent,
    resolve: { events: EventsListResolver },
  },
  {
    path: 'events/:id',
    component: EventDetailsComponent,
    canActivate: [EventRouteActivator],
  },
  { path: '404', component: Error404Component },
  //The line of code below specifies the default route if the url is empty and also says that it should also route if the path being called matches the default route, the "pathMatch" does this.
  { path: '', redirectTo: '/events', pathMatch: 'full' },

  //In the load children, we specify the file path of the module with the "#" suffix and the name of the module which is the name of the class being exported (concatenated).
  //{ path: 'user', loadChildren: './user/user.module#UserModule' },
  //The above line of code is the old way of doing routing of older modules, the newer one is shown below.

  { path: 'user', 
  loadChildren: () => import('./user/user.module').then(m => m.UserModule) }
  //What the above line of code says is "when the path has the "user" prefix, load the "UserModule" class from the path "./user/user.module" and serve it"
];
