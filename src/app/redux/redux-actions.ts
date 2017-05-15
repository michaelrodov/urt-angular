/**
 * Created by Carlos on 12/08/2016.
 */
import * as actionTypes from './ActionTypes';

export function initState(summary) {
    return {
        type: actionTypes.INIT_STATE,
        data: summary
    }
}
export function setGrade(name, grade) {
    return {
        type: actionTypes.SET_GRADE,
        name: name,
        grade: grade
    }
}
export function setAcTeam(names, team) {
    return {
        type: actionTypes.SET_TEAM,
        names: names,
        team: team
    }
}
export function setOrderByGame(column, desc){
    return {
        type: actionTypes.ORDERBY_GAME,
        column: column,
        desc: desc
    }
}
export function setOrderBySummary(column, desc){
    return {
        type: actionTypes.ORDERBY_SUMMARY,
        column: column,
        desc: desc
    }
}
export function includePlayer(playerName) {
    return {
        type: actionTypes.INCLUDE_PLAYER,
        playerName: playerName
    }
}
export function excludePlayer(playerName) {
    return {
        type: actionTypes.EXCLUDE_PLAYER,
        playerName: playerName
    }
}
//todo validate that the order of teams is correct
export function buildTeams() {
    return {
        type: actionTypes.BUILD_TEAMS
    }
}
export function setActiveGame(gameName) {
    return {
        type: actionTypes.SET_GAME,
        key: gameName
    }
}
