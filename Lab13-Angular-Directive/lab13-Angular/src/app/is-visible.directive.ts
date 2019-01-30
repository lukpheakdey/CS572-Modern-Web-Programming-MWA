import { Directive, Input, ElementRef } from '@angular/core';

@Directive({
  selector: '[appIsVisible]'
})
export class IsVisibleDirective {

  // tslint:disable-next-line:no-input-rename
  @Input('isVisible') value: boolean;

  constructor(private element: ElementRef) { }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
    if (this.value) {
      this.element.nativeElement.style.visiblity = 'visible';
    } else {
      this.element.nativeElement.style.visiblity = 'hidden';
    }
  }

}
