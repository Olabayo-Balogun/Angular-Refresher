import { Component } from '@angular/core';


@Component({
  // The selector name "events-app" is what must be called when trying to render its content (which is usually found in the template) to where you want it.
  selector: 'events-app',

  //template typically contains the code snippet that should be used as a template wherever its injected.
  //The <router-outlet></router-outlet> tag is used to tell Angular to map to the component that matches the url being  requested.
  template: `
    <nav-bar></nav-bar>
    <router-outlet></router-outlet>
  `,
})

//The class must be exported for it to be useable/callable where you need it.
export class EventsAppComponent {
  title = 'app';
}
