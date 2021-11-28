import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//Importing router module helps with declaring and using routes
import { RouterModule } from '@angular/router';
import { AuthService } from './user/auth.service';

import {
  EventsListResolver,
  EventsListComponent,
  EventThumbnailComponent,
  EventService,
  EventDetailsComponent,
  EventRouteActivator,
  CreateEventComponent,
} from './events/index';

import { Error404Component } from './errors/404.component';

//We import the built component by calling the name we assigned to it in the "export class" code block within the component file.
import { EventsAppComponent } from './events-app.component';
import { NavBarComponent } from './nav/nav-bar.component';
import { ToastrService } from './common/toastr.service';
import { appRoutes } from './routes';

@NgModule({
  //The "imports" array is where we declare modules that will be used thus making it's content available to the module it is declared in.
  imports: [
    //The BrowserModule makes a lot of core angular services and directives available for us to use.
    //imports makes things available for use in the declaration and other arrays so the import array is very important
    BrowserModule,
    //The line of code below is used to import the routes into the application.
    RouterModule.forRoot(appRoutes),
  ],

  declarations: [
    //Here is where we declare that it will be used. Components that will be used in a project are usually declared here.
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    EventDetailsComponent,
    NavBarComponent,
    CreateEventComponent,
    Error404Component,
  ],

  //Services are declared within the "providers" array, it helps Angular know where to find them.

  providers: [
    EventService,
    //The longhand way of declaring services in the provider (using EventService as an example) is shown just below
    //{provide: EventService, useValue: EventService}
    //The "provide" refers to the request and the "useValue" refers to what is given in response to the request, it can be a function or a service.
    ToastrService,
    EventRouteActivator,
    //We'll be using the longhand way to declare our canDeactivate function, code below shows how it's done.
    { provide: 'canDeactivateCreateEvent', useValue: checkDirtyState },
    EventsListResolver,
    AuthService,
  ],
  // This is where we declare that the component is one that is instantly used when it is called.
  bootstrap: [EventsAppComponent],
})
export class AppModule {}

export function checkDirtyState(component: CreateEventComponent) {
  if (component.isDirty) {
    return window.confirm(
      "You haven't saved this event, do you really want to cancel?"
    );
  }
  return true;
}
