import { Component } from '@angular/core';

@Component({
  // The selector name "events-app" is what must be called when trying to render its content (which is usually found in the template) to where you want it.
  selector: 'events-app',

  //template typically contains the code snippet that should be used as a template wherever its injected.
  template: 
  `
    <h2>Hello World</h2>
    <img src="assets/images/basic-shield.png"/>
  `
  //We can add static assets because of some arrays that were specified in the angular.json file under the build block which contains the "assets", "styles" and "scripts" array.
})

//The class must be exported for it to be useable/callable where you need it.
export class EventsAppComponent {
  title = 'app';
}
