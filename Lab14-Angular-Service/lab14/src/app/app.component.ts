import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/user/services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private service: DataService) { }

  title = 'lab14';

  ngOnInit(): void {
    this.service
        .getOnlineData()
        .subscribe(d => (localStorage.data = JSON.stringify(d)));
  }
}
