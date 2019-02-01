import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})

export class UserdetailsComponent implements OnInit, OnDestroy {

  public userId;
  public userData;
  public paramSubcription;

  constructor(private route: ActivatedRoute, private users: DataService) {
    console.log('is here333');
    this.paramSubcription = route.params.subscribe(params => {
      this.userId = params['id'];
    });
  }

  ngOnInit() {
    console.log('is here');
    this.userData = this.users.getCachedData()
                              .find(user => user.login.uuid == this.userId);
  }

  ngOnDestroy(): void {
    this.paramSubcription.unsubscribe();
  }
}
