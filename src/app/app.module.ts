import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {PendulumLoaderComponent} from './urt/pendulum-loader/pendulum-loader.component';
import {ContentPageComponent} from './urt/content-page/content-page.component';
import {TeamsTableComponent} from "./urt/teams-table/teams-table.component";
import {TeamsPieComponent} from "./urt/teams-pie/teams-pie.component";
import {GameListComponent} from "./urt/game-list/game-list.component";
import {GameDetailsComponent} from "./urt/game-details/game-details.component";
import {GameButtonComponent} from "./urt/game-button/game-button.component";
import {ReplacePipe} from "./urt/replace.pipe";

@NgModule({
    declarations: [
        AppComponent,
        PendulumLoaderComponent,
        ContentPageComponent,
        TeamsTableComponent,
        TeamsPieComponent,
        GameListComponent,
        GameDetailsComponent,
        GameButtonComponent,
        ReplacePipe
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {

}
