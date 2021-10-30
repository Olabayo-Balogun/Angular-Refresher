import { Injectable } from '@angular/core';
import {
  Router,
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
} from '@angular/router';
import { EventService } from '../shared/event.service';

@Injectable({ providedIn: 'root' })
export class EventRouteActivator implements CanActivate {

  constructor(private eventService: EventService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    //The const below evaluates the existence of the id paramater being inputted in the getEvent() method, if the id doesn't exist, we reroute to our error 404 page.
    const eventExists = !!this.eventService.getEvent(+route.params['id']);

    if (!eventExists) {
      this.router.navigate(['404']);
    }

    //This returns the event after confirming that it exists.
    return eventExists; 
  }
}
