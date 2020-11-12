import React from 'react';
import {Col, Row} from "antd";
import {ChromeOutlined, GithubOutlined} from "@ant-design/icons/es/icons/index";
import { Avatar, Tooltip } from 'antd';
import { UserOutlined, AntDesignOutlined } from '@ant-design/icons';
import s from './style.module.css';


function TaskCard({item}) {
    return (

            <div className={s.shape}>
                <div className={s.group_title}>
                    {item.task_group.title}
                </div>
                <div className={s.description}>
                    {item.description}
                </div>
                <Row className={s.button_block}>
                    <Col span={12}>
                        <GithubOutlined className={s.icon}/>
                        2
                        <ChromeOutlined className={s.icon} />
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
    )
}

export default TaskCard