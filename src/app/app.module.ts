import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {PendulumLoaderComponent} from './urt/pendulum-loader/pendulum-loader.component';
import {ContentPageComponent} from './urt/content-page/content-page.component';

@NgModule({
    declarations: [
        AppComponent,
        PendulumLoaderComponent,
        ContentPageComponent
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
