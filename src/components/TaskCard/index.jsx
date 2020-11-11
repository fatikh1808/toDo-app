import React from 'react';
import {Col, Row} from "antd";
import {ChromeOutlined, GithubOutlined} from "@ant-design/icons/es/icons/index";
import { Avatar, Tooltip } from 'antd';
import { UserOutlined, AntDesignOutlined } from '@ant-design/icons';


function TaskCard() {
    return (
        <Col span={6} style={{padding: 10}}>
            <div style={{backgroundColor: 'white', borderRadius: 5, padding: 15}}>
                <div style={{
                    height: "33%",
                    borderRadius: 5,
                    backgroundColor: 'yellow',
                    padding: 5,
                    width: 'fit-content',
                    paddingRight: 10,
                    paddingLeft: 10
                }}>
                    Fotikh
                </div>
                <div style={{height: "33%", paddingTop: 15, paddingBottom: 15}}>
                    Fotikhs
                </div>
                <Row style={{height: "33%"}}>
                    <Col span={12}>
                        <GithubOutlined style={{fontSize: 20, margin: 5}}/>
                        2
                        <ChromeOutlined style={{fontSize: 20, margin: 5}} />
                   2
                    </Col>
                    <Col span={12}>
                        <Avatar.Group maxCount={2} maxStyle={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>
                            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                            <Avatar style={{ backgroundColor: '#f56a00' }}>K</Avatar>
                            <Tooltip title="Ant User" placement="top">
                                <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
                            </Tooltip>
                            <Avatar style={{ backgroundColor: '#1890ff' }} icon={<AntDesignOutlined />} />
                        </Avatar.Group>
                    </Col>
                </Row>
            </div>
        </Col>
    )
}

export default TaskCard