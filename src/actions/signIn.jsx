import * as types from "../constants";

export const signUp = (username, password, name) => {
    return {
        type: types.SIGNUP_SUCCESS,
        user: {
            username: username,
            password: password,
            name: name,
            isManager: false
        }
    }
};
