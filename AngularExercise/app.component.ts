import { Component } from '@angular/core';

import {MyServiceService} from './my-service.service';
import { Http } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Class Exercise';
  search:string ='';
  posts:any;
  
  constructor(private myService:MyServiceService){
    this.myService.getPosts().subscribe(res => this.posts = res.json());
  }
  
}
