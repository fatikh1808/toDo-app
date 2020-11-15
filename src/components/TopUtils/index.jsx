import React from 'react';
import {Input, Row} from 'antd';
import {QqOutlined, SlackOutlined} from "@ant-design/icons/dist/index.umd";
import {Avatar} from 'antd';
import Col from "antd/es/grid/col";
import {Menu, Dropdown} from 'antd';
import s from './style.module.css';

function TopUtils({avatar, taskPage, visibleChanger, isVisible, logOut}) {

    const menu = () => {
        return (
            <Menu>
                <Menu.Item onClick={() => visibleChanger(!isVisible)}>
                    Account
                </Menu.Item>
                <Menu.Item onClick={logOut}>
                    Quit
                </Menu.Item>
            </Menu>
        )
    };

    const onSearch = value => console.log(value);
    return (
        <Row className={s.Row}>
            <Col span={20} style={{visibility: taskPage ? 'hidden' : 'initial'}}>
                <Input placeholder="input search text" onChange={onSearch}
                       className={s.input}/>
            </Col>
            <Col span={3}>
                <Row>
                    <Col span={12}>
                        <QqOutlined className={s.icon}/>
                    </Col>
                    <Col span={12}>
                        <SlackOutlined className={s.icon}/>
                    </Col>
                </Row>
            </Col>
            <Col span={1} className={s.avatar}>
                <Dropdown overlay={menu} placement="bottomRight" arrow>
                    <Avatar size="large" src={avatar}/>
                </Dropdown>
            </Col>
        </Row>
    )
}

export default TopUtils;

