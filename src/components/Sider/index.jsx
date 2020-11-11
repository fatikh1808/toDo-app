import React from 'react';
import {Col} from 'antd';
import {Menu} from 'antd';
import {
    CalendarOutlined,
    FieldTimeOutlined,
    PlusOutlined,
    FileTextOutlined, LogoutOutlined,
    PieChartOutlined,
    TeamOutlined, DownCircleOutlined
} from "@ant-design/icons/dist/index.umd";

function Sider() {
    return (
        <Col span={1} style={{color: '#5e5ef5'}}>
            <Menu mode="inline" style={{width: 'auto', minHeight: "960px",textAlign: 'center', backgroundColor: 'blue', color: 'white'}}>
                <div>
                    <div style={{width: "100%"}}>
                        <DownCircleOutlined style={{fontSize: '30px', margin: 20}}/>
                    </div>
                    <div>
                        <PlusOutlined style={{fontSize: '30px', margin: 20}}/>
                    </div>
                </div>
                <div>
                    <FileTextOutlined style={{fontSize: '30px', margin: 20}}/>
                    <TeamOutlined style={{fontSize: '30px', margin: 20}}/>
                    <PieChartOutlined style={{fontSize: '30px', margin: 20}}/>
                    <FieldTimeOutlined style={{fontSize: '30px', margin: 20}}/>
                    <CalendarOutlined style={{fontSize: '30px', margin: 20}}/>
                </div>
                <div>
                    <LogoutOutlined style={{fontSize: '30px', margin: 20}}/>
                </div>
            </Menu>
        </Col>
    )
}

export default Sider;

