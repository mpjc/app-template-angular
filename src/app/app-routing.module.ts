import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { GameComponent } from './features/Game/game/game.component';
import { ListComponent } from './features/List/list/list.component';
import { SettingsComponent } from './features/Settings/settings/settings.component';

const routes: Routes = [
  { path: 'game', component: GameComponent },
  { path: 'list', component: ListComponent },
  { path: 'settings', component: SettingsComponent },
  { path: '', component: HomeComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
