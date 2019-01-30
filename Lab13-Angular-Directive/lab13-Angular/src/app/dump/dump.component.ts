import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dump',
  template: `
    {{ x }}
  `,
  styleUrls: ['./dump.component.css']
})
export class DumpComponent implements OnInit {
  // tslint:disable-next-line:no-input-rename
  @Input('data') x: string;

  constructor() { }

  ngOnInit() {
  }

}
