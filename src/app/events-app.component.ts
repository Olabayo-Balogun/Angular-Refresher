import { Component } from '@angular/core';

@Component({
  // The selector name "events-app" is what must be called when trying to render its content (which is usually found in the template) to where you want it.
  selector: 'events-app',

  //template typically contains the code snippet that should be used as a template wherever its injected.
  template: '<events-list></events-list>',
})

//The class must be exported for it to be useable/callable where you need it.
export class EventsAppComponent {
  title = 'app';
}
