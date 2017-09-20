import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'Homework 11';

    counter = 0;

    counterReceiver(num: number): void {
        this.counter = num;
    }

}
