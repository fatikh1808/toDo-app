import * as types from '../constants';

const token = localStorage.getItem('token');

const initialState = {
    isAuthenticated: !!token,
    userId: null,
    token,

};

export default function authReducer(state = initialState, action) {
    return state
}