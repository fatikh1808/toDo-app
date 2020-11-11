import React from 'react';
import {Col} from 'antd';
import TopUtils from "./../TopUtils";
import PageTitle from "./../Title";
import Sorters from "./../Sorters";
import TaskItems from "./../TaskItems";

function Content() {
    return (
        <Col span={20} style={{padding: 25}}>
            <TopUtils/>
            <PageTitle/>
            <Sorters/>
            <TaskItems/>
        </Col>
    )
}

export default Content;

