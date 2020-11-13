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


function TaskTypes({getTaskGroups, allGroups}) {

    console.log("allGroups", allGroups)

    const {loading, error, data} = useQuery(GET_TASK_GROUPS);

    React.useEffect(() => {
        if (data) {
            getTaskGroups(data)
        }
    }, [data]);

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
        if (typeof allGroups !== 'undefined' && allGroups.length > 0) {
            return (
                <div className={s.div}>
                    {allGroups.map(item => (
                        <div key={item.id}
                             style={{display: 'flex', paddingLeft: 10, paddingRight: 10, backgroundColor: 'yellow'}}>
                            <TaskType title={item.title} id={item.id}/>
                        </div>
                    ))}
                </div>
            )
        } else {
            return (
                <div>
                    loading ....
                </div>
            )
        }

    }

}

export default TaskTypes;