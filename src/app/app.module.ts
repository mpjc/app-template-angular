import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { reducers, metaReducers } from './store';

import { FooterComponent, HeaderComponent, MainComponent } from './layout';
import { HomeComponent } from './features/home';
import {
  ListComponent,
  ListAddComponent,
  ListItemEditComponent,
  ListItemViewComponent,
  ListItemsComponent,
} from './features/List';
import {
  GameComponent,
  PuzzleBoardComponent,
  PuzzleSetupComponent,
  PuzzleTileComponent
} from './features/Game';
import { SettingsComponent } from './features/Settings';
import { ModalComponent } from './shared/modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    ListComponent,
    ListAddComponent,
    ListItemEditComponent,
    ListItemViewComponent,
    ListItemsComponent,
    GameComponent,
    PuzzleBoardComponent,
    PuzzleSetupComponent,
    PuzzleTileComponent,
    SettingsComponent,
    ModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot(reducers, { metaReducers })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
