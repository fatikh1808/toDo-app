import * as types from "../constants";


export const getAllTasks = (data) => {
    return {
        type: types.GET_TASKS_SUCCESS,
        data: data
    }
};


export const getActiveTask = (task) => {
    return {
        type: types.GET_ACTIVE_TASK,
        task: task
    }
};
export const getActiveTaskGroup = (group) => {
    return {
        type: types.GET_ACTIVE_GROUP_TASKS,
        group: group
    }
};

export const taskDone = (isDone) => {
    return {
        type: types.TASK_DONE_SUCCESS,
        data: isDone
    }
};

export const addNewTask = (task) => {
    return {
        type: types.ADD_TASK_SUCCESS,
        task: task
    }
};

export const getTaskGroups = (data) => {
    return {
        type: types.GET_TASK_GROUPS,
        groups: data.group
    }
};