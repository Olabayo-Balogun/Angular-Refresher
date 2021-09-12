import { Component } from '@angular/core';

//The double braces in the <h2> tag is a one way binding which shows that it's not sending data back.
//The "event" shows a model class while the "name" shows a property within the class, Angular will map to it and generate the content.
//The "\$" is used to escape the dollar sign because of the string literal
@Component({
  selector: 'events-list',
  //We use "templateUrl" here because we're importing an external template, we use the "template" word when we're writing template within the component.
  //It is important to properly route to the template html file in order to render the content well.
  //By adding the "<event-thumbnail></event-thumbnail>" you're able to pass in data from here into the event-thumbnail component.
  //The "event1" maps to the data within the class below while the one in square brackets maps to the "@Input()" property in the event-thumbnail component. (which allows us to send data to the component).
  //Note that the name in the angle bracket must match the name after the "@Input()" method in the thumbnail component.
  //Note that the output event property must match the name after the "@Output()" method in the EventThumbnailComponent
  //The "($event)" refers to the response that is passed when the event is fired.
  template: `
    <div>
      <h1>Upcoming Angular Events</h1>
      <hr />
      <event-thumbnail
        (eventClick)="handleEventClicked($event)"
        [event]="event1"
      ></event-thumbnail>
    </div>
  `,
})

//The name assigned to the export class here must match the name imported in the app module for it to be recognizable.
export class EventsListComponent {
  //The data below typically comes from an API
  event1 = {
    id: 1,
    name: 'Angular Connect',
    date: '9/26/2036',
    time: '10:00 am',
    price: 599.99,
    imageUrl: '/assets/images/angularconnect-shield.png',
    location: {
      address: '1057 DT',
      city: 'London',
      country: 'England',
    },
  };

  //This helps us map to the function that was created in the child component and receive the data it's passing.
  handleEventClicked(data) {
    console.log('received:', data);
  }
}
