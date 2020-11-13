import * as types from '../constants';

const initialState = {
    allTasks: [],
    activeGroupTasks: {},
    activeTask: {}
};

export default function taskReducer(state = initialState, action) {
    switch (action.type){
        case types.GET_TASKS_SUCCESS:
            return {
                ...state,
                allTasks: action.data.users[0].us_tasks
            };
        case types.GET_ACTIVE_TASK:
            return {
                ...state,
                activeTask: action.task
            };
        case types.TASK_DONE_SUCCESS:
            return {
                ...state,
                activeTask: {
                    ...state.activeTask,
                    isDone: action.data
                }
            };
        case types.GET_ACTIVE_GROUP_TASKS:
            return {
                ...state,
                activeGroupTasks: action.group
            };
        case types.ADD_TASK_SUCCESS:
            return {
                ...state,
                allTasks: [
                    ...state.allTasks
                ]
            }
    }
    return state
}