import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styleUrls: ['./odd.component.css']
})
export class OddComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() x: number;

  getTheNumber(x) {
     console.log('The number in odd.component.ts is: ' + x);
     return(x);
  }

}
