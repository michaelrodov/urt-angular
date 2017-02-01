import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'game-button',
  templateUrl: './game-button.component.html',
  styleUrls: ['./game-button.component.css']
})
export class GameButtonComponent implements OnInit {

    @Input('label') label : string;

  constructor() {

  }

  ngOnInit() {
  }

}
