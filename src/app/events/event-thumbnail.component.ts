//You can import more components by adding a comma after the previous component
import { Component, Input, Output, EventEmitter } from '@angular/core';

//The purpose of this thumbnail component is to generate a bespoke list of events every time it is called,we separated it from the component html file because the html houses static code and this very block of code is mean't to be dynamic.
@Component({
  selector: 'event-thumbnail',
  template: `
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
      <button class="btn btn-primary" (click)="handleClickMe()">
        Click me!
      </button>
    </div>
  `,
})
export class EventThumbnailComponent {
  //The code below basically creates an event property that is of type "any" because we're not particular about it's data type, it's like "var" in a way.
  //The "@Input()" method tells the project to expect data from another component.
  @Input() event: any;

  //The "EventEmitter" below is an Angular method
  //The output property name must be passed into the component in the parent component.
  //Note that EventEmitters only pass on a single value, to pass on multiple values, wrap them in an object.
  @Output() eventClick = new EventEmitter();
  //We're sending a response to the parent component here.
  handleClickMe() {
    this.eventClick.emit(this.event.name);
  }
}
