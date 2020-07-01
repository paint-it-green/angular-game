import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

// material
import { MatGridListModule } from '@angular/material/grid-list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatBadgeModule } from '@angular/material/badge';
import { MAT_COLOR_FORMATS, NgxMatColorPickerModule, NGX_MAT_COLOR_FORMATS } from '@angular-material-components/color-picker';
import { MatIconModule } from '@angular/material/icon';

// components
import { GameComponent } from './pages/game/game.component';
import { AddPlayerComponent } from './shared/modal/add-player/add-player.modal';
import { ObstacleAlertComponent } from './shared/modal/obstacle-alert/obstacle-alert.modal';


const materialModules = [
  MatGridListModule,
  MatExpansionModule,
  MatButtonModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule,
  MatBadgeModule,
  MatIconModule,
  MatIconModule,
]
const components = [
  AddPlayerComponent,
  ObstacleAlertComponent,
]

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    ...components
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    NgxMatColorPickerModule,
    ...materialModules
  ],
  exports: [
    FormsModule,
    ...materialModules
  ],
  entryComponents: [
    ...components
  ],
  providers: [
    { provide: MAT_COLOR_FORMATS, useValue: NGX_MAT_COLOR_FORMATS }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
