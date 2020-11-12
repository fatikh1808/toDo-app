import React from 'react';
import TaskType from "../TaskType";
import {gql, useQuery} from "@apollo/client/index";
import s from './style.module.css';

const GET_TASK_GROUPS = gql`
  query MyQuery {
   groups {
    title
    id
  }
}`;


function TaskTypes() {

    const {loading, error, data} = useQuery(GET_TASK_GROUPS);

    if (loading) {
        return (
            <div className={s.div}>
                <TaskType loading/>
            </div>
        )
    } else if (error) {
        return (
            <div className={s.div}>
                <TaskType error/>
            </div>

        )
    } else {
        return (
            <div className={s.div}>
                {data.groups.map(item => (
                    <div key={item.id} style={{display: 'flex', paddingLeft: 10, paddingRight: 10, backgroundColor: 'yellow'}}>
                        <TaskType title={item.title} id={item.id}/>
                    </div>
                ))}
            </div>
        )
    }

}

export default TaskTypes;