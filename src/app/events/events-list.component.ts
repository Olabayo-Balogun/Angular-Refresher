import { Component, OnInit } from '@angular/core';
import { EventService } from './shared/event.service';
import { ToastrService } from '../common/toastr.service';
import { ActivatedRoute } from '@angular/router';

//This variable helps typescript to know that the toastr third-party library is in scope.
declare let toastr;

//The double braces in the <h2> tag is a one way binding which shows that it's not sending data back.
//The "event" shows a model class while the "name" shows a property within the class, Angular will map to it and generate the content.
//The "\$" is used to escape the dollar sign because of the string literal
@Component({
  //Selector isn't need when routing is done properly.

  //It is important to properly route to the template html file in order to render the content well.
  //By adding the "<event-thumbnail></event-thumbnail>" you're able to pass in data from here into the event-thumbnail component.

  //The "event1" maps to the data within the class below while the one in square brackets maps to the "@Input()" property in the event-thumbnail component. (which allows us to send data to the component).
  //Note that the name in the angle bracket must match the name after the "@Input()" method in the thumbnail component.

  //The #thumbnail points to the event-thumbnail component
  //Note that the "*" before the "ngFor" is a structural directive

  //Structural directives are different from the normal directives because structural directives change the shape of the DOM (Document Object Module)
  //The “let” declares a variable and the variable is accessed in the template biding “event” as such a local variable is declared. The “of events” simply tells Angular to loop over the “events” array specified in the EventListComponent below the code above. Note that the names must match.

  //Each event being obtained is then formatted according to the specifications of the “<event-thumbnail></event-thumbnail>”. The ngFor can be repeated anywhere within the template and will successfully map to the specified array that it is referencing, albeit with a bit more repeated code.

  template: `
    <div>
      <h1>Upcoming Angular Events</h1>
      <hr />
      <div class="row">
        <div *ngFor="let event of events" class="col-md-5">
          <event-thumbnail
            (click)="handleThumbnailClick(event.name)"
            [event]="event"
          ></event-thumbnail>
        </div>
      </div>
    </div>
  `,
})

//The name assigned to the export class here must match the name imported in the app module for it to be recognizable.
export class EventsListComponent implements OnInit {
  //The data below typically comes from an API
  events: any;
  constructor(
    private eventService: EventService,
    private toastr: ToastrService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.events = this.route.snapshot.data['events'];
  }

  handleThumbnailClick(eventName) {
    this.toastr.success(eventName);
  }
}
