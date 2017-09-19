import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `<button (click)="dec()">-</button>{{counterValue}}<button (click)="inc()">+</button>`,
  styles: []
})
export class CounterComponent implements OnInit {
  counterValue = 0;
  
  constructor() { }

  dec(){ this.counterValue -= 1;}

  inc(){ this.counterValue += 1;}

  ngOnInit() {
  }

}
