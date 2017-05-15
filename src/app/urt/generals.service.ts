import {Injectable} from '@angular/core';
import * as d3 from "d3";
import * as c3 from "c3";
import * as constants from "./constants";

@Injectable()
export class GeneralsService {

    constructor() {
    }

    getRatio(player): number {
        if ((player.deaths + player.kills) == 0) return 0;
        return Math.round((player.kills / (player.deaths + player.kills)) * 100) / 100;
    }

    getPlayersGradePerGame(player, game) {
        if (!game || !game.players || !Object.keys(game.players)) {
            var nullGame = game;
            return 0;
        }
        var numberOfPlayers = Object.keys(game.players).length;
        var relative_kills = (game.gameTotalDeaths == 0 ? 0.01 : numberOfPlayers * player.kills / (2 * game.gameTotalDeaths));
        var relative_score = 1;
        if (player.score != 0) {
            relative_score = (game.gameTotalScore == 0 ? 0.01 : numberOfPlayers * player.score / (2 * game.gameTotalScore));
        } else {
            relative_score = relative_kills;
        }
        var totalGrade = Math.round((relative_kills + relative_score + this.getRatio(player)) * 3000) / 100;
        return totalGrade;
    }

    getTeamKills(players) {
        var sum = 0;
        for (const playerName of Object.keys(players)) {
            sum += players[playerName].kills;
        }
        return sum;
    }

    getTeamGrade(players): number {
        var sum = 0;
        for (let playerName of Object.keys(players)) {
            sum += players[playerName].grade;
        }
        return sum;
    }

    getKeys(players): string[] {
        let keys = [];
        for (const player of players) {
            keys.push(player.name);
        }
        return keys;
    }

    getTeamBalance(players): Object {
        let teamBalance = {
            totals: [0, 0],
            redTeamKeys: [],
            blueTeamKeys: []
        };


        // teamBalance["totals"] = [0, 0]; //init teams
        // teamBalance["redTeamKeys"] = [];
        // teamBalance["blueTeamKeys"] = [];


        var teamBlue = [];
        var teamRed = [];
        var teamIter = 0;


        for (const playerName of Object.keys(players)) {
            let player = players[playerName];
            if (player.active) {
                if (teamIter % 2 == 0) { //assign to each team alternatively
                    teamBlue.push(player);
                } else {
                    teamRed.push(player);
                }
                teamIter++;
            }
        }

        var iter = constants.BALANCE_ITERATIONS;
        //run for max 1000 iterations and try different player sets until minimum diff is reached
        while (iter > 0 && Math.abs(this.getTeamGrade(teamRed) - this.getTeamGrade(teamBlue)) > 5) {

            //randomly select 2 players to switch
            var bluePlayerIndx = Math.floor(Math.random() * teamBlue.length);
            var redPlayerIndx = Math.floor(Math.random() * teamRed.length);
            //remove players from both teams
            var bluePlayer = teamBlue.splice(bluePlayerIndx, 1)[0];
            var redPlayer = teamRed.splice(redPlayerIndx, 1)[0];
            //swap the players
            teamBlue.push(redPlayer);
            teamRed.push(bluePlayer);

            iter--;
        }


        teamBalance.totals[1] = this.getTeamGrade(teamRed);
        teamBalance.totals[constants.BLUE] = this.getTeamGrade(teamBlue);
        teamBalance.blueTeamKeys = this.getKeys(teamBlue);
        teamBalance.redTeamKeys = this.getKeys(teamRed);

        return teamBalance;
    }


    orderByRatio(a, b) {
        return a.ratio - b.ratio;
    }

    orderByGrade(a, b) {
        return a.grade - b.grade;
    }

    orderByNumber(a, b) {
        let keyArrayA = a.key.split(":");
        let keyArrayB = b.key.split(":");
        //keyarray[2] = sort desc order
        //true desc - false asc
        if (keyArrayA[2] === 'true') {
            return keyArrayA[1] - keyArrayB[1];
        } else {
            return keyArrayB[1] - keyArrayA[1];
        }
    }

    extractPlayersLineData(games) {
        var playersLineData = [];
        var columnsArry = [];
        var gameKeys = Object.keys(games);

        gameKeys.sort(function (akey, bkey) {
            let a = parseInt(akey.substring(0, bkey.indexOf("_")));
            let b = parseInt(bkey.substring(0, bkey.indexOf("_")));
            if (a > b) return -1;
            if (a < b) return 1;
            return 0;
        });

        for (var i = 0; i < gameKeys.length; i++) {
            var playerKeys = Object.keys(games[gameKeys[i]].players);
            for (var j = 0; j < playerKeys.length; j++) {
                if (!playersLineData[playerKeys[j]]) {
                    playersLineData[playerKeys[j]] = [playerKeys[j]];
                }
                playersLineData[playerKeys[j]].push(
                    this.getPlayersGradePerGame(
                        games[gameKeys[i]].players[playerKeys[j]], games[gameKeys[i]]));
            }
        }
        playerKeys = Object.keys(playersLineData);
        columnsArry.push(['xAxis'].concat(gameKeys));
        for (var i = 0; i < playerKeys.length; i++) {
            columnsArry.push(playersLineData[playerKeys[i]]);

        }

        return columnsArry;
    }

    calcPlayerGrade(data) {
        var dataV = data;
        var playerGrades = {};
        for (var i = 1; i < dataV.length; i++) {
            var playerData = dataV[i];
            var playerName = playerData[0];
            var weightSum = 0;
            var gradeSum = 0;
            var playerGrade;
            for (var j = 1; j < playerData.length; j++) {
                var weight = 0; //for all historical games no calc
                if (j < 3) {
                    weight = 10;
                } else if (j < 6) {
                    weight = 8;
                } else if (j < 12) {
                    weight = 4;
                }
                weightSum += weight;
                gradeSum += weight * parseInt(playerData[j]);
            }
            if (weightSum > 0) {
                var tempGrade = gradeSum / weightSum;
                playerGrade = Math.round(tempGrade * 100) / 100;
            } else {
                playerGrade = 10;
            }
            playerGrades[playerName] = playerGrade;
        }
        return playerGrades;
    }

    extractPlayersLineDataRatio(games) {
        var playersLineData = [];
        var columnsArry = [];
        var gameKeys = Object.keys(games);
        gameKeys.sort(function (str1: string, str2: string) {
            let a: number = parseInt(str1.substring(0, str1.indexOf("_")));
            let b: number = parseInt(str2.substring(0, str2.indexOf("_")));
            if (a > b) return -1;
            if (a < b) return 1;
            return 0;
        });
        for (var i = 0; i < gameKeys.length; i++) {
            var playerKeys = Object.keys(games[gameKeys[i]].players);
            for (var j = 0; j < playerKeys.length; j++) {
                if (!playersLineData[playerKeys[j]]) {
                    playersLineData[playerKeys[j]] = [playerKeys[j]];
                }
                playersLineData[playerKeys[j]].push(
                    this.getRatio(
                        games[gameKeys[i]].players[playerKeys[j]]));
            }
        }
        playerKeys = Object.keys(playersLineData);
        columnsArry.push(['xAxis'].concat(gameKeys));
        for (var i = 0; i < playerKeys.length; i++) {
            columnsArry.push(playersLineData[playerKeys[i]]);

        }

        return columnsArry;
    }

    calcPlayerRatio(data) {
        var dataV = data;
        var playerRatios = {};
        for (var i = 1; i < dataV.length; i++) {
            var playerData = dataV[i];
            var playerName = playerData[0];
            var weightSum = 0;
            var ratioSum = 0;
            var playerRatio;
            for (var j = 1; j < playerData.length; j++) {
                var weight = 0; //for all historical games no calc
                if (j < 2) {
                    weight = 10;
                } else if (j < 4) {
                    weight = 8;
                } else if (j < 6) {
                    weight = 4;
                }
                weightSum += weight;
                ratioSum += weight * parseFloat(playerData[j]);
            }
            if (weightSum > 0) {
                var tempRatio = ratioSum / weightSum;
                playerRatio = Math.round(tempRatio * 200) / 100;
            } else {
                playerRatio = 1;
            }
            playerRatios[playerName] = playerRatio;
        }
        return playerRatios;
    }

    /**
     * Get the value of a querystring
     * @param  {String} field The field to get the value of
     * @param  {String} url   The URL to get the value from (optional)
     * @return {String}       The field value
     */
    getQueryString(field, url) {
        var href = url ? url : window.location.href;
        var reg = new RegExp('[?&]' + field + '=([^&#]*)', 'i');
        var string = reg.exec(href);
        return string ? string[1] : null;
    };
}
