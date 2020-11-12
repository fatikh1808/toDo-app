import React from 'react';
import {Row, Col} from 'antd';
import Sider from "../../components/Sider";
import Distributor from "../../components/Distributor";

const TaskDistributor = ({id, getAllTasks, userName, avatar}) => {

    return (
        <Row>
            <Sider/>
            <Distributor id={id} getAllTasks={getAllTasks} avatar={avatar} userName={userName}/>
        </Row>
    )
};

export default TaskDistributor;