import {Injectable} from '@angular/core';
import * as d3 from "d3";
import * as c3 from "c3";

@Injectable()
export class GeneralsService {

    constructor() {
    }

    generatePowerPie(columns): any {
        return c3.generate({
            bindto: '#power-pie-container',
            pie: {
                expand: true,
                label: {
                    format: function (value, ratio, id) {
                        return d3.precisionRound(value, 1).toString();
                    }
                }
            },
            size: {
                width: 200,
                height: 200
            },
            data: {
                colors: {
                    red: '#424242',
                    blue: '#a5c04d'
                },
                columns: columns,
                type: 'pie'
            }
        });
    }
}
