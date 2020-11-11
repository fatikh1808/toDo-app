import React from 'react';
import {Typography} from 'antd';

const {Title, Text} = Typography;

function TaskType() {
    return (
        <div style={{backgroundColor: 'yellow', height: 50, padding: 10}}>
            <Text strong>Ant Design (strong)</Text>
            <div style={{backgroundColor: 'black', color: 'white',width: 'fit-content', borderRadius: '10px', alignContent: 'center', padding: '1px', display: 'inline-flex'}}>
                122
            </div>
        </div>
    )
}

export default TaskType;

