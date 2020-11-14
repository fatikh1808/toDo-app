import {createStore, applyMiddleware} from "redux";
import thunk from 'redux-thunk';
import loggerMiddleware from 'redux-logger';
import rootReducer from '../reducers';
import {composeWithDevTools} from 'redux-devtools-extension';

export * from './../actions/logIn';
export * from './../actions/signIn';
export * from './../actions/task';
export * from './../actions/user';


export default function configureStore() {
    return createStore(rootReducer, composeWithDevTools(
        applyMiddleware(thunk, loggerMiddleware),
    ));
}