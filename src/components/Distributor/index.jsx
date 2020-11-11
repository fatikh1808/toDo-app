import React from 'react';
import {Col} from 'antd';
import TopUtils from "./../TopUtils";
import Title from "./../Title";
import Sorters from "./../Sorters";
import TaskItems from "./../TaskItems";

const Content = () => {
    return (
        <Col span={20}>
            <TopUtils/>
            <Title/>
            <Sorters/>
            <TaskItems/>
        </Col>
    )
};

export default Content;

