import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Homework 12';
  items = ['Item1', 'Item2', 'Item3', 'Item4','Item5']; 
  blnVisibility: boolean = true;

  hideShow():void {
    this.blnVisibility = !this.blnVisibility;
  }
}
