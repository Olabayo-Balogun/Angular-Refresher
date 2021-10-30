//some of the properties that will be used to populate the event-details html page will come from the browser url.
//events/1
import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/event.service';
//In order to be able to access routing parameters, you need to import the "ActivatedRoute" from Angular
import { ActivatedRoute } from '@angular/router';

@Component({
  //we don't need a selector for this page because it's not a child component of another page but a full page itself that we will route to.
  templateUrl: './event-details.component.html',
  styles: [
    `
      .container {
        padding-left: 20px;
        padding-right: 20px;
      }
      .event-image {
        height: 100px;
      }
    `,
  ],
})
export class EventDetailsComponent implements OnInit {
  event: any;
  constructor(
    private eventService: EventService,
    private route: ActivatedRoute
  ) {}
  //Things we add in the constructor (above) can be used within the class we're exporting

  ngOnInit() {
    //The "this.route.snapshot.params['id']" parameter in the ".getEvent" will be used to get the routing parameter used to access this component.
    //It is important to note the data type of the method within a service that you're calling.
    //The "getEvent" method expects a number so we cast it to number by using the "+" sign.
    this.event = this.eventService.getEvent(+this.route.snapshot.params['id']);
  }
}
