import * as types from '../constants';

const initialState = {
    allTasks: [],
    management: [],
    sales: [],
    operations: [],
    marketing: [],
    humanResources: [],
    finance: [],
    customerService: []
};

export default function taskReducer(state = initialState, action) {
    switch (action.type){
        case types.GET_TASKS_SUCCESS:
            return {
                ...state,
                allTasks: action.data.users[0].us_tasks
            }
    }
    return state
}