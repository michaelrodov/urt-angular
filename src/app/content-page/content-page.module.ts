import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AbdToggleSwitchComponent} from '../abd-toggle-switch/abd-toggle-switch.component';
import {GameComponent} from '../game/game.component';
import {GameButtonComponent} from '../game-button/game-button.component';
import {GameDetailsComponent} from '../game-details/game-details.component';
import {GameListComponent} from '../game-list/game-list.component';
import {GamesSummaryComponent} from '../games-summary/games-summary.component';
import {TeamsPieComponent} from '../teams-pie/teams-pie.component';
import {TeamsTableComponent} from '../teams-table/teams-table.component';

@NgModule({
    imports: [
        CommonModule

    ],
    declarations: [
        AbdToggleSwitchComponent,
        GameComponent,
        GameButtonComponent,
        GameDetailsComponent,
        GameListComponent,
        GamesSummaryComponent,
        TeamsPieComponent,
        TeamsTableComponent]
})
export class ContentPageModule {
}
