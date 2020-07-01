import { Component, Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-obstacle-alert',
  templateUrl: './obstacle-alert.modal.html',
  styleUrls: ['./obstacle-alert.modal.scss']
})
export class ObstacleAlertComponent {

    constructor(
        public dialogRef: MatDialogRef<ObstacleAlertComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any
    ) { }

    close(): void {
        this.dialogRef.close();
    }

}
