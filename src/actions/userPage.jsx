import * as types from '../constants';

export const visibleChanger = (isDone) => {
    return {
        type: types.USER_PAGE_IS_VISIBLE,
        isDone: isDone
    }
};