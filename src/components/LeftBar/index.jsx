import React from 'react';
import {Col} from 'antd';
import {Typography} from 'antd';

const {Title, Text} = Typography;

function LeftBar() {
    return (
        <Col span={4}>
            <div style={{backgroundColor: 'green', height: 75}}>
                <Title level={2}>My task</Title>
            </div>
            <div style={{width: 'auto', minHeight: "960px", height: "100%", backgroundColor: 'white'}}>
                <div style={{backgroundColor: 'yellow', height: 50, padding: 10}}>
                    <Text strong>Ant Design (strong)</Text>
                    <div style={{backgroundColor: 'black', color: 'white',width: 'fit-content', borderRadius: '10px', alignContent: 'center', padding: '1px', display: 'inline-flex'}}>
                        122
                    </div>
                </div>
            </div>
        </Col>
    )
}

export default LeftBar;

