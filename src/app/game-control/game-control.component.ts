import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() gameEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  theNumber: number;
  intervalID: ReturnType<typeof setInterval>;

  onStartGame() {
    // console.log("start game!!");
    this.theNumber = 0;
    this.intervalID = setInterval(() => {
      this.theNumber++;
      this.gameEvent.emit(this.theNumber);
    }, 1000);
  }

  onStopGame() {
    // console.log("stop game!!");
    clearInterval(this.intervalID);
  }

}
