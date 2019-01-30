import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appLoggable]'
})
export class LoggableDirective {

  constructor() { }

  @HostListener('dbclick') dbclick() {
    console.log('DIV element has been clicked');
  }

}
