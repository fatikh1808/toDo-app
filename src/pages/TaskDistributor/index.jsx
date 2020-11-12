import React from 'react';
import Content from "../../components/Content";

const TaskDistributor = ({id, getAllTasks, userName, avatar, allTasks}) => {

getAllTasks(id);
//     useEffect(() => {
//         getAllTasks(id)
//     }, []);

    return (
        <Content userName={userName} avatar={avatar} id={id} allTasks={allTasks}/>
    )
};

export default TaskDistributor;