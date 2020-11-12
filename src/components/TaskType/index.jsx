import React from 'react';
import {Typography} from 'antd';
import s from './style.module.css';
import {Link} from "react-router-dom";
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
            <Link className={s.div} to={`/tasks/${title}`}>
                <Text style={{flex: 1}} strong>{title}</Text>
                <div className={s.count}>
                    122
                </div>
            </Link>
        )
    }
}

export default TaskType;

