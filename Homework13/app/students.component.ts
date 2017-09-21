import { Component, OnInit } from '@angular/core';

import { DbService } from './db.service';

@Component({
  selector: 'app-students',
  template: `
  <h2>MUM - Students!</h2>
    <ul>
        <li *ngFor="let student of data">
        <a [routerLink]="['../profile', student.id]">
        {{student.name}}
        </a></li>
    </ul>
  `,
  styles: ["h2{color:#f0f; font-family:'Trebuchet MS'}"]
})
export class StudentsComponent implements OnInit {

  data:any[] = [];
  constructor(private dbService:DbService) { 
    this.data = dbService.getData();
    console.log(this.data);
  }

  ngOnInit() {
  }

}
