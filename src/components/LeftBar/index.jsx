import React from 'react';
import {Col} from 'antd';
import {Menu} from 'antd'

function LeftBar() {
    return (
        <Col span={4}>
            <div style={{backgroundColor: 'green', height: 75}}>
                My tasks
            </div>
            <Menu mode="inline" style={{width: 'auto', minHeight: "960px", height: "100%"}}>
                <Menu.Item key="1">Option 1</Menu.Item>
                <Menu.Item key="2">Option 2</Menu.Item>
                <Menu.Item key="3">Option 3</Menu.Item>
                <Menu.Item key="4">Option 4</Menu.Item>
            </Menu>
        </Col>
    )
}

export default LeftBar;

