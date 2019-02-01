import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { UserComponent } from './user.component';
import { DataService } from './services/data.service';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { RouterModule, Routes } from '@angular/router';
import { CheckUserGuard } from './../guards/check-user.gurad';
//import { DataService } from './services/data.service';
//import { CommonModule } from '@angular/common';
//import { HttpClientModule } from '@angular/common/http';
//import { DataService } from './services/data.service';

const routes: Routes = [
  { path: '', component: UserComponent },
  {
    path: 'userdetails/:id',
    component: UserdetailsComponent,
    canActivate: [CheckUserGuard]
  }
];

@NgModule({
  declarations: [
    UserComponent,
    UserdetailsComponent
  ],
  imports: [
    HttpClientModule,
    RouterModule.forChild(routes),
    CommonModule
  ],
  providers: [
    { provide: DataService, useClass: DataService }
  ],
  exports: [
    UserComponent,
    UserdetailsComponent
  ],
  bootstrap: [UserComponent]
})
export class UserModule {}
