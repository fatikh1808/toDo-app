import React from 'react';
import {Col, Row} from "antd";
import LeftBar from "./../LeftBar";
import Content from "./../Content";

function Distributor() {
    return (
        <Col span={23} style={{backgroundColor: 'red'}}>
            <Row>
                <LeftBar/>
                <Content/>
            </Row>
        </Col>
    )
}

export default Distributor;