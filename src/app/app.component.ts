import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = `Craig McKay`;

  person = {
    name: 'Craig McKay',
    email: 'craig.mckay@gmail.com',
    telephone: '++447931 835910'
  };
}
