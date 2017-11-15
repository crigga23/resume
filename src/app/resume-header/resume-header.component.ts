import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume-header',
  templateUrl: './resume-header.component.html',
  styleUrls: ['./resume-header.component.css']
})
export class ResumeHeaderComponent implements OnInit {

  title = `Craig McKay`;
  
    person = {
      name: 'Craig McKay',
      email: 'craig.mckay@gmail.com',
      telephone: '++447931 835910',
      linkedIn: 'www.linkedin.com/in/craig-mckay-1a970156',
      twitterHandle: 'https://twitter.com/crigga'
    };

  constructor() { }

  ngOnInit() {
  }

}
