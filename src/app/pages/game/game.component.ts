import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  steps:Array<number> = [];

  constructor() { }

  ngOnInit(): void {

    for (let x = 1; x <= 10; x++) {
      let items = [];
      for (let y = 1; y <= 10; y++) {
        items.push(this.steps.length + y);
      }
      this.steps = [...items, ...this.steps];
    }
  }

}
