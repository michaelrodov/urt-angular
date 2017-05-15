import {Component, OnInit, Input} from '@angular/core';

@Component({
    selector: 'app-pie-chart',
    templateUrl: './pie-chart.component.html',
    styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {

    @Input('values') valuesArray: number[];

    public datasets: Array<any> =
        [
            {
                label: "My First dataset",
                data: []
            }
        ];

    public options: any = {
        responsive: true
    };

    public labels: Array<any> = ['Red', 'Blue'];

    public legend: boolean = true;

    public type: string = 'pie';

    public colors: Array<any> = [
        { // grey
            backgroundColor: 'rgba(148,159,177,0.2)',
            borderColor: 'rgba(148,159,177,1)',
            pointBackgroundColor: 'rgba(148,159,177,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(148,159,177,0.8)'
        },
        { // dark grey
            backgroundColor: 'rgba(77,83,96,0.2)',
            borderColor: 'rgba(77,83,96,1)',
            pointBackgroundColor: 'rgba(77,83,96,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(77,83,96,1)'
        }
    ];

    constructor() {
        console.log("pie chart loaded");
    }

    ngOnInit() {
        this.datasets[0].data = this.valuesArray;
    }

    // events
    public chartClicked(e: any): void {
        console.log(e);
    }

    public chartHovered(e: any): void {
        console.log(e);
    }
}
