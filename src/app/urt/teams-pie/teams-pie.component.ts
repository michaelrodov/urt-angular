import {Component, OnInit} from '@angular/core';
import {GeneralsService} from "../generals.service";

@Component({
    selector: 'teams-pie',
    templateUrl: './teams-pie.component.html',
    styleUrls: ['./teams-pie.component.css']
})
export class TeamsPieComponent implements OnInit {

    constructor(private generalsService: GeneralsService) {
    }

    ngOnInit() {
        console.log("TeamsPieComponent inited")
    }

    /***
     * Respond after Angular checks the component's views and child views.
     Called after the ngAfterViewInit and every subsequent ngAfterContentChecked.
     A component-only hook.
     */
    ngAfterViewChecked() {
        console.log("TeamsPieComponent ngAfterViewChecked")
        this.generalsService.generatePowerPie([111, 222]);
    }
}
