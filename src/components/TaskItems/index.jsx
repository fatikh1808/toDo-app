import React from 'react';
import {Col, Row} from "antd";
import TaskCard from "../TaskCard";

function TaskItems({allTasks, groupPage, data}) {

    const Mapper = (data) => {
        return (
            <Row>
                {data.map(item => (
                    <Col xs={24} sm={12} md={8} lg={6} xl={4} key={item.id} style={{padding: 10}}>
                        <TaskCard item={item}/>
                    </Col>
                ))}
            </Row>
        )
    };

    if (groupPage) {
        return (
            Mapper(data)
        )
    } else {
        return (
            Mapper(allTasks)
        )
    }
}

export default TaskItems;