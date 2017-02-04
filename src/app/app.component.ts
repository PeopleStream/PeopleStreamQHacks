import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<li *ngFor="let article of articles">
        {{ article }}
      </li>`,
})
export class AppComponent  { articles = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];}
