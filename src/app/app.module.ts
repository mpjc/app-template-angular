import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent, HeaderComponent, MainComponent } from './layout';
import { HomeComponent } from './features/home/home.component';
import { GameComponent } from './features/Game';
import { ListComponent } from './features/List';
import { SettingsComponent } from './features/Settings';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GameComponent,
    ListComponent,
    SettingsComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
