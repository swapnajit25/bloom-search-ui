import { SearchService } from './search.service';
import { Component } from '@angular/core';
import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
  title = 'bloom-search-ui';
  message:string = '';

  constructor(private searchService: SearchService,
    private notificationService: NotificationsService) {}

  bloomSearch(value: string) {
    this.searchService.search(value).subscribe(data => {
      if(data)
      {
        this.message = `${value} FOUND`;
        this.onSuccess();
      }
      else
      {
        this.message = `${value} NOT FOUND`;
        this.onError();
      }

    });
  }

  onSuccess() {
    this.notificationService.success('Result', this.message, {
      position: ['bottom', 'right'],
      timeOut: 3000,
      pauseOnHover: true,
      animate: 'fade',
      showProgressBar: true
    })
  }

  onError() {
    this.notificationService.error('Result', this.message, {
      position: ['bottom', 'right'],
      timeOut: 3000,
      pauseOnHover: true,
      animate: 'fade',
      showProgressBar: true
    })
  }
}
