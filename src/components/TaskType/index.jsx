import React from 'react';
import {Typography} from 'antd';
import s from './style.module.css';

const {Title, Text} = Typography;

function TaskType({loading, error, title}) {

    if (error) {
        return (
            <div className={s.div}>
                <Text strong>error</Text>
            </div>
        )
    } else if (loading) {
        return (
            <div className={s.div}>
                <Text strong>Loading ...</Text>
            </div>
        )
    } else {
        return (
            <div className={s.div}>
                <Text strong>{title}</Text>
                <div className={s.count}>
                    122
                </div>
            </div>
        )
    }
}

export default TaskType;

