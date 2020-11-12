import React from 'react';
import {useParams} from 'react-router-dom';
import {gql, useQuery} from "@apollo/client/index";
import TopUtils from "../../components/TopUtils";
import PageTitle from "../../components/Title";
import {Col} from "antd";
import {Typography} from 'antd';
import { Switch } from 'antd';

const {Title, Text} = Typography;

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


function TaskPage({avatar}) {

    let {taskId} = useParams();

    const {loading, error, data} = useQuery(GET_MY_TODOS, {
        variables: {
            id: taskId
        }
    });
    function onChange(checked) {
        console.log(`switch to ${checked}`);
    }

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
                {console.log(data.tasks[0].isDone)}

                <TopUtils avatar={avatar} taskPage/>
                <PageTitle title={data.tasks[0].title} taskPage/>
                <Title level={3}>
                    Description: {data.tasks[0].description}
                </Title>
                <Text code>
                    Created at: {data.tasks[0].created_at}
                </Text>
                <Text code>
                    Updated at: {data.tasks[0].updated_at}
                </Text>
                <Switch checked={data.tasks[0].isDone} onChange={onChange} />
            </Col>
        )
    }

}

export default TaskPage;

