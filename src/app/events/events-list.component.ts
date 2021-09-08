import { Component } from '@angular/core';

//The double braces in the <h2> tag is a one way binding which shows that it's not sending data back.
//The "event" shows a model class while the "name" shows a property within the class, Angular will map to it and generate the content.
//The "\$" is used to escape the dollar sign because of the string literal
@Component({
  selector: 'events-list',
  template: `
    <div>
      <h1>Upcoming Angular Events</h1>
      <hr />
      <div class="well hoverwell thumbnail">
        <h2>{{ event.name }}</h2>
        <div>Date: {{ event.date }}</div>
        <div>Time: {{ event.time }}</div>
        <div>Price: \${{ event.price }}</div>
        <div>
          <span>Location: {{ event.location.address }}</span>
          <span>&nbsp;</span>
          <span>{{ event.location.city }}, {{ event.location.country }}</span>
        </div>
      </div>
    </div>
  `,
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
