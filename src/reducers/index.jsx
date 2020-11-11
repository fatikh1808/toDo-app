import {combineReducers} from "redux";
import authReducer from './authReducer';
import taskReducer from './taskReducer';
import userReducer from './userReducer';

export default combineReducers({
    authReducer,
    taskReducer,
    userReducer
})