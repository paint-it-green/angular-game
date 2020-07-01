import { Component, Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ThemePalette } from '@angular/material/core';

import { Player } from '../../interface/player.interface';
import { Color } from '@angular-material-components/color-picker';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.modal.html',
  styleUrls: ['./add-player.modal.scss']
})
export class AddPlayerComponent {

    public disabled = false;
    public color: ThemePalette = 'primary';
    public touchUi = true;

    player: Player = {
        name: "",
        history: [],
        color: "",
        position: 0,
        loseturn: 0,
        style: {
            left: 0,
            paddingTop: 0,
            marginTop: 0,
            background: "",
            bottom: 0,
            marginLeft: 0
        }
    }
    colorModel: Color;

    constructor(
        public dialogRef: MatDialogRef<AddPlayerComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any
    ) { }

    onCancel(): void {
        this.dialogRef.close();
    }

    save() {
        if(this.player.name && this.colorModel) {
            this.player.color = this.colorModel.rgba;
            this.dialogRef.close(this.player);
        }
    }

}
