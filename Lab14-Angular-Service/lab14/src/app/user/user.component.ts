import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  public userArray;

  constructor(private users: DataService) {
    console.log(JSON.parse(localStorage.data).results);
    this.userArray = JSON.parse(localStorage.data).results;
    //this.userArray = this.users.getCachedData;
  }

  ngOnInit() {
  }

}
