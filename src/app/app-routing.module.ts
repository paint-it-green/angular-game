import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// components
import { GameComponent } from './pages/game/game.component';


const routes: Routes = [
  { path: '',   redirectTo: '/game', pathMatch: 'full' },
  { path: 'game', component: GameComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
