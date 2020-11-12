import React from 'react';
import {Col, Row} from "antd";
import TaskCard from "../TaskCard";

function TaskItems({allTasks, groupPage, data}) {

    if (groupPage){
        return (
            <Row>
                {data.map(item => (
                    <Col key={item.id} span={6} style={{padding: 10}}>
                        <TaskCard item={item}/>
                    </Col>
                ))}
            </Row>
        )
    } else {
        return (
            <Row>
                {allTasks.map(item => (
                    <Col key={item.id} span={6} style={{padding: 10}}>
                        <TaskCard item={item}/>
                    </Col>
                ))}
            </Row>
        )
    }
}

export default TaskItems;