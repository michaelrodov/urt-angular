import {Component, OnInit, Input} from '@angular/core';

@Component({
    selector: 'game-list',
    templateUrl: './game-list.component.html',
    styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {

    @Input('games') gamesList : string[];

    constructor() {
    }

    ngOnInit() {
    }

    public setActiveGame = (gameKey) => {
        //TODO emit redux event: change active game
    }
}
