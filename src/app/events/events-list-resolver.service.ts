import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { EventService } from './shared/event.service';
import { map } from 'rxjs/operators';

@Injectable()
export class EventsListResolver implements Resolve<any> {
  constructor(private eventService: EventService) {}
  resolve() {
    //map gives us access to the events that are passed in here, events we get from the "getEvents()" method.
    //We can't use "subscribe" there because this is a resolver and subscribe won't return what we need.
    return this.eventService.getEvents().pipe(map((events) => events));
  }
}
