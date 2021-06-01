import { SearchService } from './search.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { SimpleNotificationsModule } from 'angular2-notifications';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SimpleNotificationsModule.forRoot()
  ],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
