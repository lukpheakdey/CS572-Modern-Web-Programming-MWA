import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SmartComponent } from './smart/smart.component';
import { DumpComponent } from './dump/dump.component';
import { IsVisibleDirective } from './is-visible.directive';
import { LoggableDirective } from './loggable.directive';

@NgModule({
  declarations: [
    AppComponent,
    SmartComponent,
    DumpComponent,
    IsVisibleDirective,
    LoggableDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
