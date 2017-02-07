import { Component, OnInit } from '@angular/core';
import {GeneralsService} from "../generals.service";

@Component({
  selector: 'teams-pie',
  templateUrl: './teams-pie.component.html',
  styleUrls: ['./teams-pie.component.css']
})
export class TeamsPieComponent implements OnInit {

  constructor(private generals : GeneralsService) { }

  ngOnInit() {
      this.generals.generatePowerPie([111,222]);

  }

}
