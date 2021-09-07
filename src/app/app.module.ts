import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//We import the built component by calling the name we assigned to it in the "export class" code block within the component file.
import { EventsAppComponent } from './events-app.component';

@NgModule({
  declarations: [
    //Here is where we declare that it will be used. Components that will be used in a project are usually declared here.
    EventsAppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  // This is where we declare that the component is one that is instantly used when it is called.
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
