import { Component, OnDestroy } from '@angular/core';
import { DbService } from './db.service';

import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs/Rx";

@Component({
  selector: 'app-student-profile',
  template: `
  <h2>MUM - Student profile!</h2>
  <ul>
    <li><b>Name:</b> {{studentData.name}} </li>
    <li><b>ID:</b> {{studentData.stuID}} </li>
    <li><b>Email:</b> {{studentData.email}} </li>
  </ul>
  `,
  styles: ["h2{color:#f0f; font-family:'Trebuchet MS'}"]
})
export class StudentProfileComponent implements OnDestroy {

  studentData:any;
 
  private subscription: Subscription;
 
  constructor(private dbService:DbService, 
    private activatedRoute: ActivatedRoute, private router:Router) {
    this.subscription = activatedRoute.params.subscribe(
        (param: any) => this.studentData = dbService.getStudent(param['id'])
    );
    console.log(this.studentData);
    
    //using imerative routing for unknown id
    if(this.studentData===undefined){
      this.router.navigate(['']);
    }

  } 

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
