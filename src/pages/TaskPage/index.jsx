import React from 'react';
import {useParams} from 'react-router-dom';
import {gql, useQuery, useMutation} from "@apollo/client";
import TopUtils from "../../components/TopUtils";
import PageTitle from "../../components/Title";
import {Col} from "antd";
import {Typography} from 'antd';
import {Switch} from 'antd';

const {Title, Text} = Typography;


const CHANGE_ISDONE = gql`
 mutation ($id: Int!, $isDone: Boolean!) {
  update_tasks(where: {id: {_eq: $id}}, _set: {isDone: $isDone}) {
    returning {
      isDone
      title
    }
  }
}
`;

const GET_MY_TODOS = gql`
  query ($id: Int!){
 tasks(where: {id: {_eq: $id}}) {
    title
    description
    created_at
    isDone
    id
    task_group {
      title
    }
    updated_at
  }
  }`;


function TaskPage({avatar, taskDone, getActiveTask, activeTask}) {

    let {taskId} = useParams();

    const {loading, error, data} = useQuery(GET_MY_TODOS, {
        variables: {
            id: taskId
        }
    });

    const [addTodo, {data: changedData}] = useMutation(CHANGE_ISDONE);

    function onChange(checked) {
        addTodo({variables: {id: parseInt(taskId), isDone: checked}},
        );
    }

    React.useEffect(() => {
        if (changedData) {
            taskDone(changedData.update_tasks.returning[0].isDone);
        }
    }, [changedData]);

    React.useEffect(() => {
        if (data) {
            getActiveTask(data.tasks[0])
        }
    }, [data]);

    if (loading) {
        return (
            <div>
                loading ....
            </div>
        )
    } else if (error) {
        return (
            <div>
                error
            </div>
        )
    } else {
        return (
            <Col span={20} style={{padding: 25}}>
                <TopUtils avatar={avatar} taskPage/>
                <PageTitle title={activeTask.title} taskPage/>
                <Title level={3}>
                    Description: {activeTask.description}
                </Title>
                <Text code>
                    Created at: {activeTask.created_at}
                </Text>
                <Text code>
                    Updated at: {activeTask.updated_at}
                </Text>
                <Switch checked={activeTask.isDone} onChange={onChange}/>
            </Col>
        )
    }

}

export default TaskPage;

