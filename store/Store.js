import {combineReducers} from 'redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { NeedyReducer } from './reducer';

export const store = createStore(
    combineReducers({
        needy : NeedyReducer
    }),
    {},
    applyMiddleware(thunk)
);