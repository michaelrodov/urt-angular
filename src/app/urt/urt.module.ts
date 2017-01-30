import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GeneralsService} from "./generals.service";
import {ReduxService} from "./redux.service";
import {AbdToggleSwitchComponent} from './abd-toggle-switch/abd-toggle-switch.component';
import {GameComponent} from './game/game.component';
import {GameButtonComponent} from './game-button/game-button.component';
import {GameDetailsComponent} from './game-details/game-details.component';
import {GameListComponent} from './game-list/game-list.component';
import {GamesSummaryComponent} from './games-summary/games-summary.component';
import {TeamsPieComponent} from './teams-pie/teams-pie.component';
import {TeamsTableComponent} from './teams-table/teams-table.component';
import {ContentPageComponent} from "./content-page/content-page.component";
import {PendulumLoaderComponent} from "./pendulum-loader/pendulum-loader.component";

@NgModule({
    imports: [
        CommonModule
    ],
    providers: [
        GeneralsService,
        ReduxService
    ],
    declarations: [
        AbdToggleSwitchComponent,
        GameComponent,
        GameButtonComponent,
        GameDetailsComponent,
        GameListComponent,
        GamesSummaryComponent,
        TeamsPieComponent,
        TeamsTableComponent,
        PendulumLoaderComponent
    ],
    exports: [ContentPageComponent]
})
export class UrtModule {
}
/***
 * Providers are the maps between name and object value
 * used in the child classes in order to received them in the constructor for internal use
 */