import React from 'react';
import {gql, useQuery} from "@apollo/client/index";

const GET_MY_TODOS = gql`
  query MyQuery {
  tasks {
    title
  }
}`;


function TaskPage() {
    const { loading, error, data } = useQuery(GET_MY_TODOS);

    console.log(data);
    return (
        <div>
            TaskPage
        </div>
    )
}

export default TaskPage;

