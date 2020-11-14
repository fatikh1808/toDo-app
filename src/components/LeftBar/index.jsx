import React from 'react';
import {Col} from 'antd';
import TaskTypes from "../TaskTypes";
import LeftBarTitle from "../LeftBarTitle";
import {Layout} from "antd";

const {Sider} = Layout;

function LeftBar({getTaskGroups, allGroups}) {
    return (
        <Sider style={{
            overflow: 'hidden',
            height: '100vh',
            marginLeft: 80,
            position: 'fixed',
            left: 0,
            backgroundColor: "#2a5c9a"
        }}>
            <LeftBarTitle/>
            <TaskTypes getTaskGroups={getTaskGroups} allGroups={allGroups}/>
        </Sider>
    )
}

export default LeftBar;

