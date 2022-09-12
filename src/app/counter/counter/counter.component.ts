import { Component } from "@angular/core";

@Component({
  selector: 'app-counter',
  template: `
  <h1>{{title}}</h1>
  <h3>The base is: <strong>{{base}}</strong></h3>

  <div>
    <button (click)="increase(-base)">-{{base}}</button>
    <span>{{number}}</span>
    <button (click)="increase(base)">+{{base}}</button>
  </div>
  `
})


export class CounterComponent {
  title: string = 'Counter App';
  number: number = 10;
  base: number = 5;

  increase(value: number) {
    this.number += value;
  }
}
