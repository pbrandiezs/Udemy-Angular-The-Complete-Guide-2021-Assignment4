import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // @Output() theNumberFromGameControlEvent = new EventEmitter();

  theNumberFromGameControl: number;

  displayTheNumber(x) {
    // console.log('The number is app.component.ts is: ' + x);
    this.theNumberFromGameControl = x;
  }
}

