import * as types from '../constants';

const token = localStorage.getItem('token');

const initialState = {
    isManager: false,
    userInfo: {}
};

export default function userReducer(state = initialState, action) {
    return state
}