import React from 'react';
import {Typography} from 'antd';

const {Title} = Typography;

function LeftBarTitle() {
    return (
        <div style={{backgroundColor: 'green', height: 75}}>
            <Title level={2}>My task</Title>
        </div>
    )
}

export default LeftBarTitle