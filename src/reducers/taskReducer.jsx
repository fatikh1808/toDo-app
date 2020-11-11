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
    return state
}