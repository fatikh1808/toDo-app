import * as types from '../constants';

const initialState = {
    isAuthenticated: false,
    user: {},
    isManager: false,
    users: [
        {
            "name": "Dimych",
            "lastName": "Leon",
            "Country": "Russia",
            "DateBirth": "18.08.1997",
            "id": "1",
            "username": "123",
            "password": "123",
            "isManager": false,
            "avatar_url": "https://www.blexar.com/avatar.png"
        },
        {
            "name": "Georgiy",
            "lastName": "Leon",
            "id": "2",
            "Country": "Russia",
            "DateBirth": "18.08.1997",
            "username": "321",
            "password": "321",
            "isManager": false,
            "avatar_url": "https://www.blexar.com/avatar.png"
        },
        {
            "name": "Leon",
            "lastName": "Leon",
            "Country": "Russia",
            "DateBirth": "18.08.1997",
            "id": "3",
            "username": "444",
            "password": "444",
            "isManager": true,
            "avatar_url": "https://www.blexar.com/avatar.png"
        },
        {
            "name": "Insaf",
            "lastName": "Leon",
            "Country": "Russia",
            "DateBirth": "18.08.1997",
            "id": "4",
            "username": "777",
            "password": "777",
            "isManager": true,
            "avatar_url": "https://www.blexar.com/avatar.png"
        },
    ]
};

export default function authReducer(state = initialState, action) {
    switch (action.type) {
        case types.LOGIN_SUCCESS:
            return {
                ...state,
                isAuthenticated: true,
                isManager: action.user[0].isManager,
                user: action.user[0]
            };
        case types.LOGOUT_SUCCESS:
            return {
                ...state,
                isAuthenticated: false,
                isManager: false,
                user: {}
            };
        case types.SIGNUP_SUCCESS:
            return {
                ...state,
                users: [...state.users, action.user],
                isAuthenticated: true,
                isManager: action.user.isManager,
                user: action.user
            }
    }

    return state
}
