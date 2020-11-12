import React from 'react';
import {Col, Row} from "antd";
import LeftBar from "./../LeftBar";
import Content from "./../Content";

function Distributor({id, getAllTasks, userName, avatar}) {

    console.log(getAllTasks(id));

    return (
        <Col span={23} style={{backgroundColor: 'red'}}>
            <Row>
                <LeftBar/>
                <Content userName={userName} avatar={avatar}/>
            </Row>
        </Col>
    )
}

export default Distributor;