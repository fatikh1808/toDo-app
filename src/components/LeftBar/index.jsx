import React from 'react';
import {Col} from 'antd';
import TaskTypes from "../TaskTypes";
import LeftBarTitle from "../LeftBarTitle";
import {getTaskGroups} from "../../actions";



function LeftBar({getTaskGroups, allGroups}) {
    return (
        <Col span={4}>
            <LeftBarTitle/>
            <TaskTypes getTaskGroups={getTaskGroups} allGroups={allGroups}/>
        </Col>
    )
}

export default LeftBar;

