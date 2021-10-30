    import {Routes} from '@angular/router';
    import { EventsListComponent } from './events/events-list.component';
    import { EventDetailsComponent } from './events/event-details/event-detail.component';
    import { CreateEventComponent } from './events/create-event.component';

    export const appRoutes:Routes = [
    //The paths specified below show the name of the url, the location of the component.
    //if the url being called matches the name of URL, routing will call the associated components.
    //Routes provides type safety and flag compile-time errors.
    //The "path: 'events/new'" comes before id so Angular doesn't make the mistake of thinking the "new" is an id parameter neither does Angular make "path: 'events/new'" unreachable.
    { path: 'events/new', component: CreateEventComponent },
    { path: 'events', component: EventsListComponent },
    { path: 'events/:id', component: EventDetailsComponent },
    //The line of code below specifies the default route if the url is empty and also says that it should also route if the path being called matches the default route, the "pathMatch" does this.
    { path: '', redirectTo: '/events', pathMatch: 'full' },
    ];
