import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <h2>MUM - Home Page!</h2>
    <p>
     Welcome to the Maharishi University of Management...
    </p>
  `,
  styles: ["h2{color:#f0f; font-family:'Trebuchet MS'}"]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
