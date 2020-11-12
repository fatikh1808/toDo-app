import React from 'react';
import {Input, Row} from 'antd';
import {QqOutlined, SlackOutlined, UserOutlined} from "@ant-design/icons/dist/index.umd";
import {Avatar} from 'antd';
import Col from "antd/es/grid/col";

const {Search} = Input;


function TopUtils({avatar, taskPage}) {

    const onSearch = value => console.log(value);
    return (
        <Row style={{height: "10%"}}>
            <Col span={20} style={{visibility: taskPage ? 'hidden' : 'initial'}}>
                <Search placeholder="input search text" onSearch={onSearch} style={{width: 'auto'}}/>
            </Col>
            <Col span={3}>
                <Row>
                    <Col span={12}>
                        <QqOutlined style={{fontSize: 35}}/>
                    </Col>
                    <Col span={12}>
                        <SlackOutlined style={{fontSize: 35}}/>
                    </Col>
                </Row>
            </Col>
            <Col span={1}>
                <Avatar size="large" src={avatar}/>
            </Col>
        </Row>
    )
}

export default TopUtils;

