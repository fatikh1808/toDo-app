import React from 'react';
import {Typography} from 'antd';
import s from './style.module.css';

const {Title} = Typography;

function PageTitle({userName, groupPage, taskPage, title}) {

    const Returner = (title) => {
        return (
            <div className={s.text}>
                <Title>
                    {title}
                </Title>
            </div>
        )
    };

    if (groupPage) {
        return (Returner(userName)
        )
    } else if (taskPage) {
        return (
            Returner(`Title: ${title}`)
        )
    } else {
        return (
            Returner(`Welcome back, ${userName}`)
        )
    }
}

export default PageTitle;

