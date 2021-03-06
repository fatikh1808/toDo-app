import * as types from '../constants/index';
import PropTypes from 'prop-types';

export const login = (username, password, users) => {
    if (users.some(person => person.username === username && person.password === password)) {
            let user = users.filter(item => item.username === username);
        return {
            type: types.LOGIN_SUCCESS,
            user: user
        }
    } else {
        return {
            type: types.LOGIN_FAIL,
        }
    }
};

export const logOut = () => {
    return {
        type: types.LOGOUT_SUCCESS,
    }
};

login.propTypes = {
    username: PropTypes.string,
    password: PropTypes.string,
    users: PropTypes.array
}

login.defaulProps = {
    username: "",
    password: "",
    users: []
}