import { SearchService } from './search.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
  title = 'bloom-search-ui';
  message:string = '';

  constructor(private searchService: SearchService) {}

  bloomSearch(value: string) {
    console.log(`value: ${value}`);
    this.searchService.search(value).subscribe(data => {
      if(data)
        this.message = 'FOUND';
      else
        this.message = 'NOT FOUND'  

    });
  }
}
