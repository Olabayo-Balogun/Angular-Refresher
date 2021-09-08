import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//We import the built component by calling the name we assigned to it in the "export class" code block within the component file.
import { EventsAppComponent } from './events-app.component';
import { EventsListComponent } from './events/events-list.component';

@NgModule({
  declarations: [
    //Here is where we declare that it will be used. Components that will be used in a project are usually declared here.
    EventsAppComponent,
    EventsListComponent,
  ],

  //The "imports" array is where we declare modules that will be used thus making it's content available to the module it is declared in.
  imports: [
    //The BrowserModule makes a lot of core angular services and directives available for us to use.
    //imports makes things available for use in the declaration and other arrays so the import array is very important
    BrowserModule,
  ],

  //Services are declared with the "providers" array.
  providers: [],
  // This is where we declare that the component is one that is instantly used when it is called.
  bootstrap: [EventsAppComponent],
})
export class AppModule {}
