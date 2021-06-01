import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

const httpOptionsPlain = {
    headers: new HttpHeaders({
      'Accept': 'text/plain',
      'Content-Type': 'text/plain'
    }),
    'responseType': 'text'
  };

@Injectable()
export class SearchService {
     baseUrl:string = "https://bloom-filter-engine-app.herokuapp.com";
    // baseUrl:string = "http://localhost:8081";

    constructor(private httpClient: HttpClient) {}

    search(input: string): Observable<boolean> {
        const searchUrl = `${this.baseUrl}/search?input=${input}`;
        return this.httpClient.get<boolean>(searchUrl)
            .pipe(map(data => data));
    }
}