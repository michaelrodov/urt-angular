import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AbdToggleSwitchComponent } from './abd-toggle-switch/abd-toggle-switch.component';
import { GameComponent } from './game/game.component';
import { GameButtonComponent } from './game-button/game-button.component';
import { GameDetailsComponent } from './game-details/game-details.component';
import { GameListComponent } from './game-list/game-list.component';
import { GamesSummaryComponent } from './games-summary/games-summary.component';
import { TeamsPieComponent } from './teams-pie/teams-pie.component';
import { TeamsTableComponent } from './teams-table/teams-table.component';

@NgModule({
  declarations: [
    AppComponent,
    AbdToggleSwitchComponent,
    GameComponent,
    GameButtonComponent,
    GameDetailsComponent,
    GameListComponent,
    GamesSummaryComponent,
    TeamsPieComponent,
    TeamsTableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
