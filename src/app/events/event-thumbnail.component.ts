//You can import more components by adding a comma after the previous component
import { Component, Input, Output, EventEmitter } from '@angular/core';

//The purpose of this thumbnail component is to generate a bespoke list of events every time it is called,we separated it from the component html file because the html houses static code and this very block of code is mean't to be dynamic.
//"ngSwitch" is very handy for displaying certain elements in the DOM depending on the response from the evaluated expression
@Component({
  selector: 'event-thumbnail',
  template: `
    <div class="well hoverwell thumbnail">
      <h2>{{ event?.name }}</h2>
      <div>Date: {{ event?.date }}</div>
      <div [ngClass]="getStartTimeClass()" [ngSwitch]="event?.time">
        Time: {{ event?.time }}
        <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
        <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
        <span *ngSwitchDefault>(Normal Start)</span>
      </div>
      <div>Price: \${{ event?.price }}</div>
      <div *ngIf="event?.location">
        <span>Location: {{ event?.location.address }}</span>
        <span class="pad-left"
          >{{ event?.location.city }}, {{ event?.location.country }}</span
        >
      </div>
    </div>
  `,
  //The "!important" is used to ensure that the style isn't overridden by any other styles.
  styles: [
    `
      .green {
        color: #003300 !important;
      }
      .bold {
        font-weight: bold;
      }
      .thumbnail {
        min-height: 210px;
      }
      .pad-left {
        margin-left: 10px;
      }
      .well div {
        color: #bbb;
      }
    `,
  ],
})
export class EventThumbnailComponent {
  //The code below basically creates an event property that is of type "any" because we're not particular about it's data type, it's like "var" in a way.
  //The "@Input()" method tells the project to expect data from another component.
  @Input() event: any;

  //getStartTimeClass(){
  //The "isEarlyStart" is what evaluates the condition while we declare the styling component that should accompany the style.
  // const isEarlyStart = this.event && this.event.time === '8:00 am'
  // return {green: isEarlyStart, bold: isEarlyStart}

  //The code snippet above does the same thing as the code snippet below.
  // getStartTimeClass() {
  //   if (this.event && this.event.time === '8:00 am') {
  //     return 'green bold';
  //   } else {
  //     return '';
  //   }
  // }

  //The code snippet above does the same thing as the code snippet below
  getStartTimeClass() {
    if (this.event && this.event.time === '8:00 am') {
      return ['green', 'bold'];
    } else {
      return [];
    }
  }
}
