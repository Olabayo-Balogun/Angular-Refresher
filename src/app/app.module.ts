import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//Importing router module helps with declaring and using routes
import { RouterModule } from '@angular/router';
import { Error404Component } from './errors/404.component'
import { EventRouteActivator } from './events/event-details/event-route-activator.service'

//We import the built component by calling the name we assigned to it in the "export class" code block within the component file.
import { EventsAppComponent } from './events-app.component';
import { EventsListComponent } from './events/events-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail.component';
import { NavBarComponent } from './nav/nav-bar.component';
import { EventService } from './events/shared/event.service';
import { ToastrService } from './common/toastr.service';
  import { EventDetailsComponent } from './events/event-details/event-detail.component';
  import { appRoutes } from './routes';
  import { CreateEventComponent } from './events/create-event.component';

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
    Error404Component
  ],

  //Services are declared within the "providers" array, it helps Angular know where to find them.
  providers: [EventService, ToastrService, EventRouteActivator],
  // This is where we declare that the component is one that is instantly used when it is called.
  bootstrap: [EventsAppComponent],
})
export class AppModule {}
