import * as types from '../constants';

const initialState = {
    isVisible: false
};

export function visibleChanger(state = initialState, action) {
    switch (action.type) {
        case types.USER_PAGE_IS_VISIBLE:
            return {
                ...state,
                isVisible: action.isDone
            }
    }
    return state
}