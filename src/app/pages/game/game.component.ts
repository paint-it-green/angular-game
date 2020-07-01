import { Component, OnInit, AfterViewInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

import { AddPlayerComponent } from '../../shared/modal/add-player/add-player.modal';
import { ObstacleAlertComponent } from '../../shared/modal/obstacle-alert/obstacle-alert.modal';
import { Player } from "../../shared/interface/player.interface";
import { Game } from '../../shared/model/game.model';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit, AfterViewInit {

  steps:Array<any> = [];
  game: Game = new Game();

  players: Array<Player> = [];

  constructor(
    public _dialog: MatDialog
  ) { }

  ngOnInit(): void {

    for (let x = 0; x < this.game.dimension[0]; x++) {
      let items = [];
      for (let y = 0; y < this.game.dimension[1]; y++) {
        let step = this.steps.length + (y + 1)
        let obstacle = this.game.obstacles.find((o:any) => {
          return o.step == step;
        })
        items.push({
          row: x,
          col: y,
          step: step,
          obstacle: obstacle
        });
      }
      if(x%2) items.reverse();
      this.steps = [...items, ...this.steps];
    }
    console.log(this.steps)
  }

  ngAfterViewInit() { }

  addPlayer(): void {
    const dialogRef = this._dialog.open(AddPlayerComponent, {
      width: '250px',
      data: { }
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result) this.players.push(result);
    });
  }

  setPosition(player: Player, tile: number): void {

    if(player.position == tile) return;

    let position:any = this.steps.find((step:any) => {
      return step.step == tile;
    })
    if(!position) return;
    let samePosCount = this.players.filter((p:Player) => {
      return p.position == tile;
    }).length;

    let offset = this.game.marginLeftOffset;
    let marginLeft = samePosCount ? ((samePosCount + 1) * offset) : offset;

    let row = (this.game.dimension[0] - 1) - position.row;
    let col = (row % 2) ? position.col : (this.game.dimension[1] - 1) - position.col;
    player.style = Object.assign(player.style, {
      background: player.color,
      left: `calc((10% - 0.9px + 1px) * ${col})`,
      marginTop: `calc((7.5% - 0.9px + 1px) * ${row})`,
      paddingTop: `calc((7.5% - 0.9px) * 1 + 0px)`,
      marginLeft: `${marginLeft}px`,
      bottom: "auto",
    })
    player.position = tile;

    this.checkObstacle(player);
  }

  checkObstacle(player: Player): void {
    let step = this.steps.find((s) => {
      return s.step == player.position;
    })
    console.log(step.obstacle);
    if(step.obstacle) this.showObstacleAlert(player, step.obstacle);
  }

  showObstacleAlert(player: Player, obstacle): void {
    const dialogRef = this._dialog.open(ObstacleAlertComponent, {
      width: '250px',
      data: { obstacle }
    });

    dialogRef.afterClosed().subscribe(() => {
      let newPosition = this.getNewPositionFromObstacle(player, obstacle);
      this.setPosition(player, newPosition);
    });
  }

  getNewPositionFromObstacle(player, obstacle): number {

    if(obstacle.type == "move") {
      return obstacle.value;
    } else if(obstacle.type == "backward") {
      return player.position - obstacle.value;
    } else if(obstacle.type == "forward") {
      return player.position + obstacle.value;
    } else if(obstacle.type == "loseturn") {
      player.loseturn = obstacle.value;
      return player.position;
    } else {
      return player.position;
    }

  }

}
