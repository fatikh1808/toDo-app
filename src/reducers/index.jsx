import {combineReducers} from "redux";
import authReducer from './authReducer';
import taskReducer from './taskReducer';
import {visibleChanger} from "./userPage";

export default combineReducers({
    authReducer,
    taskReducer,
    visibleChanger
})