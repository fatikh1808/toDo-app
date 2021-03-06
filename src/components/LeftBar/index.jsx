import React from 'react';
import TaskTypes from "../TaskTypes";
import LeftBarTitle from "../LeftBarTitle";
import {Layout} from "antd";
import s from './style.module.css';


const {Sider} = Layout;

function LeftBar({ getTaskGroups, allGroups }) {
    
    console.log("leftbar", allGroups)
    return (
        <Sider className={s.sider}>
            <LeftBarTitle/>
            <TaskTypes getTaskGroups={getTaskGroups} allGroups={allGroups}/>
        </Sider>
    )
}

export default LeftBar;

