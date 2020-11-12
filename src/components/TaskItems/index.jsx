import React from 'react';
import {Col, Row} from "antd";
import TaskCard from "../TaskCard";

function TaskItems({allTasks}) {

    console.log(allTasks);

    let mapper = allTasks.map(item => (
        <Col key={item.id} span={6} style={{padding: 10}}>
            <TaskCard item={item}/>
        </Col>
    ));

    return (
        <Row>
            {mapper}
        </Row>
    )
}

export default TaskItems;