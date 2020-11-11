import React from 'react';
import {Col} from 'antd';
import {Menu} from 'antd';
import {PlusOutlined} from "@ant-design/icons/es/icons/index";

function Sider() {
    return (
        <Col span={1} style={{color: '#5e5ef5'}}>
            <Menu mode="inline" style={{width: 'auto', minHeight: "960px", backgroundColor: 'blue'}}>
                <div>
                    <PlusOutlined style={{fontSize: '40px', color: '#08c'}}/>
                    <PlusOutlined style={{fontSize: '40px', color: '#08c'}}/>
                </div>
                <div>
                    <PlusOutlined style={{fontSize: '40px', color: '#08c'}}/>
                    <PlusOutlined style={{fontSize: '40px', color: '#08c'}}/>
                    <PlusOutlined style={{fontSize: '40px', color: '#08c'}}/>
                    <PlusOutlined style={{fontSize: '40px', color: '#08c'}}/>
                    <PlusOutlined style={{fontSize: '40px', color: '#08c'}}/>
                </div>
                <div>
                    <PlusOutlined style={{fontSize: '40px', color: '#08c'}}/>
                </div>
            </Menu>
        </Col>
    )
}

export default Sider;

