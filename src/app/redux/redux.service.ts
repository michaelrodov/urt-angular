import {Injectable} from '@angular/core';
import {createStore} from "redux";
import {reducers} from './redux-reducers';


@Injectable()
export class ReduxService {

    constructor() {
    }

    public generateReduxStore() {
        return createStore(reducers);
    }
}
