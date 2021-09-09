import { Component } from '@angular/core';

//The double braces in the <h2> tag is a one way binding which shows that it's not sending data back.
//The "event" shows a model class while the "name" shows a property within the class, Angular will map to it and generate the content.
//The "\$" is used to escape the dollar sign because of the string literal
@Component({
  selector: 'events-list',
  //We use "templateUrl" here because we're importing an external template, we use the "template" word when we're writing template within the component.
  //It is important to properly route to the template html file in order to render the content well.
  templateUrl: './events-list.component.html',
})

//The name assigned to the export class here must match the name imported in the app module for it to be recognizable.
export class EventsListComponent {
  //The data below typically comes from an API
  event = {
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
}
