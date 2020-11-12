import React from 'react';
import {Typography} from 'antd';
import s from './style.module.css';
import {Link} from "react-router-dom";

const {Title} = Typography;

function LeftBarTitle() {
    return (
        <div className={s.leftBarTitle}>
            <Link to={'/tasks'}>
                <Title level={2}>My task</Title>
            </Link>
        </div>
    )
}

export default LeftBarTitle