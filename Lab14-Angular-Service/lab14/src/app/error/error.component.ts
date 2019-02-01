import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  template: `<p> User not found </p>`,
  styleUrls: []
})
export class ErrorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
