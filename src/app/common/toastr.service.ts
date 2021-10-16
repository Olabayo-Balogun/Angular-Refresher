import { Injectable } from '@angular/core';

//The code snippet just below helps Typescript to know that toastr exists
declare let toastr: any;

@Injectable()
export class ToastrService {
  //The "success" method which we created (and can have any name) is to help us declare what the toastr success parameter returns
  //Note that the "toastr.success" part can't be adjusted, it has to be just that, the method surrounding it can bear any name.
  //Using the knowledge we just learnt, we can create the other methods we see below.
  success(message: string, title?: string) {
    toastr.success(message, title);
  }

  info(message: string, title?: string) {
    toastr.info(message, title);
  }

  warning(message: string, title?: string) {
    toastr.warning(message, title);
  }

  error(message: string, title?: string) {
    toastr.error(message, title);
  }
}
