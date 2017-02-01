import {Component, OnInit, Input} from '@angular/core';

@Component({
    selector: 'teams-table',
    templateUrl: './teams-table.component.html',
    styleUrls: ['./teams-table.component.css']
})
export class TeamsTableComponent implements OnInit {

    @Input("namesList") namesList: string[];

    constructor() {
    }

    ngOnInit() {
    }

}
