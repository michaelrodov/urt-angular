import {Component} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Headers} from "../../node_modules/@angular/http/src/headers";
import {RequestOptions} from "../../node_modules/@angular/http/src/base_request_options";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    isDataReady = false;

    constructor(private http: Http) {

        //TODO check super-agent library for http handling
        //load games data
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');
        let options = new RequestOptions({headers: headers});

        this.http.get("data/games.json", options).subscribe(
            (response: Response) => {
                console.log(response.status);
                this.isDataReady = true;
            },
            (err) => {
                console.log("Failed to load games.json. " + err);
            });
    }



}
