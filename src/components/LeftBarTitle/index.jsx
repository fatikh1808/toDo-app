import React from 'react';
import {Typography} from 'antd';
import s from './style.module.css';

const {Title} = Typography;

function LeftBarTitle() {
    return (
        <div className={s.leftBarTitle}>
            <Title level={2}>My task</Title>
        </div>
    )
}

export default LeftBarTitle