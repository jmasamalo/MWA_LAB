import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `<button (click)="dec()">-</button>{{counterValue}}<button (click)="inc()">+</button>`,
  styles: ['button{background-color:#bbf; border:1; font-size:17px}']
})
export class CounterComponent implements OnInit {

    @Input() counterValue = 0;

    @Output() counterChange = new EventEmitter();

    constructor() { }

    dec() {
        this.counterValue -= 1;
        this.counterChange.emit(this.counterValue);
    }

    inc() {
        this.counterValue += 1;
        this.counterChange.emit(this.counterValue);
    }

  ngOnInit() {
  }

}
