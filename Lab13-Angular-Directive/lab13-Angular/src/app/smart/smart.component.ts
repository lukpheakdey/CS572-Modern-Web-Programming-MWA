import { Component, OnInit } from '@angular/core';
import { DumpComponent } from '../dump/dump.component';

@Component({
  selector: 'app-smart',
  template: `
      <ul>
        <li *ngFor="let arrayObject of arrayObjects">
          <app-dump [data]='arrayObject'> </app-dump>
        </li>
      </ul>
  `,
  styleUrls: ['./smart.component.css']
})
export class SmartComponent implements OnInit {

  arrayObjects: string[];

  constructor() {
    this.arrayObjects = ['Angular', 'MongoDb', 'NodeJS', 'Firebase', 'Express', 'Reactive Native'];
  }

  ngOnInit() {
  }

}
