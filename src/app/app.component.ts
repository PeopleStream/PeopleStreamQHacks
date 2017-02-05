import { Component } from '@angular/core';
import {Http, HTTP_PROVIDERS, Response} from  '@angular/http';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'my-app',
  providers: [HTTP_PROVIDERS],
  template: `<li *ngFor="let article of articles">
        {{ article }}
      </li>`,
})

export class AppComponent  {
  articles = [''];
  constructor (private http: Http) {
    http.get('http://localhost:3000/news/search').toPromise()
      .then((response) => {
        articles = console.log(response.json().data);
      });
  }
}
