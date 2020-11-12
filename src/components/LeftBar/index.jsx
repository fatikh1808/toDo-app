import React from 'react';
import {Col} from 'antd';
import TaskTypes from "../TaskTypes";
import LeftBarTitle from "../LeftBarTitle";



function LeftBar() {
    return (
        <Col span={4}>
            <LeftBarTitle/>
            <TaskTypes/>
        </Col>
    )
}

export default LeftBar;

