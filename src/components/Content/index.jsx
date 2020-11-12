import React from 'react';
import {Col} from 'antd';
import TopUtils from "./../TopUtils";
import PageTitle from "./../Title";
import Sorters from "./../Sorters";
import TaskItems from "./../../containers/TaskItems";
import s from './style.module.css';

function Content({userName, avatar}) {
    return (
        <Col span={20} className={s.ContentCol}>
            <TopUtils avatar={avatar}/>
            <PageTitle userName={userName}/>
            <Sorters/>
            <TaskItems/>
        </Col>
    )
}

export default Content;

