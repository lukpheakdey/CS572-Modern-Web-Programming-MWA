import { Component, OnInit, Input, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-counter',
  // tslint:disable-next-line:use-output-property-decorator
  outputs: ['counterChange'],
  template: `
    <button class="btnDec" (click)="onDecementValue()"> - </button>
      <span> {{ counterValue }} </span>
    <button class="btnInc" (click)="onIncementValue()"> + </button>
  `,
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  // tslint:disable-next-line:no-input-rename
  @Input('counter') counterValue: number;

  counterChange: EventEmitter<number>;

  constructor() {
    this.counterChange = new EventEmitter();

  }

  ngOnInit() {
  }

  onDecementValue() {
    this.counterValue -= 1;
    this.counterChange.emit(this.counterValue);
  }

  onIncementValue() {
    this.counterValue += 1;
    this.counterChange.emit(this.counterValue);
  }

}
