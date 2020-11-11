import React from 'react';
import {Row, Col} from 'antd';
import Sider from "../../components/Sider";
import Distributor from "../../components/Distributor";

const TaskDistributor = () => {
    return (
        <Row>
            <Sider/>
            <Distributor/>
        </Row>
    )
};

export default TaskDistributor;