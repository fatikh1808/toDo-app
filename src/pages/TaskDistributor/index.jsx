import React from 'react';
import Content from "../../components/Content";
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
const TaskDistributor = ({id, getAllTasks, userName, avatar, allTasks, getActiveTaskGroup, activeGroupTasks}) => {

    const {loading, error, data} = useQuery(GET_TASKS, {
            variables: {
                id: id
            }
        }
    );

    React.useEffect(() => {
        if (data) {
            getAllTasks(data)
        }
    }, [data]);

    if (loading) {
        return (
            <div>
                loading
            </div>
        )
    } else if (error) {
        return (
            <div>
                error
            </div>
        )
    } else {
        if (typeof allTasks !== 'undefined' && allTasks.length > 0){
            return (
                <Content userName={userName} avatar={avatar} id={id} allTasks={allTasks}
                         getActiveTaskGroup={getActiveTaskGroup}
                         activeGroupTasks={activeGroupTasks}/>
            )
        } else {
            return (
                <div>
                    loading ....
                </div>
            )
        }


    }
};

export default TaskDistributor;