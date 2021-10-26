//some of the properties that will be used to populate the event-details html page will come from the browser url.
//events/1
import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/event.service';

@Component({
  //we don't need a selector for this page because it's not a child component of another page but a full page itself that we will route to.
  templateUrl: './event-details.component.html',
  styles: [
    `
      .container {
        padding-left: 20px;
        padding-right: 20px;
      }
      .event-image: {
        height: 100px;
      }
    `,
  ],
})
export class EventDetailsComponent implements OnInit {
    event:any
  constructor(private eventService: EventService) {}

  ngOnInit() {
    this.event = this.eventService.getEvent(1);
  }
}
