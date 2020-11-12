import * as types from "../constants";
import {gql, useQuery} from "@apollo/client/index";

const GET_TASKS = gql`
  query($id: Int!) {
  users(where: {id: {_eq: $id}}) {
    us_tasks {
      id
      title
      updated_at
      isDone
      created_at
      task_group {
        title
        id
      }
      description
    }
  }
}`;

export const getAllTasks = (id) => {
    const {loading, error, data} = useQuery(GET_TASKS, {
        variables: {
            id: id
        }
    });

    if (loading) {
        return {
            type: types.GET_TASKS_REQUEST
        }
    } else if (data) {
        return {
            type: types.GET_TASKS_SUCCESS,
            data: data
        }
    } else {
        return {
            type: types.GET_TASKS_FAIL,
        }
    }

};
