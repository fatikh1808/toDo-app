import React from 'react';
import {Typography} from 'antd';

const {Title} = Typography;

function PageTitle({userName, groupPage, taskPage, title}) {

    if (groupPage) {
        return (
            <div style={{height: "10%",}}>
                <Title>
                    {userName}
                </Title>
            </div>
        )
    } else if (taskPage) {
        return (
            <div style={{height: "10%",}}>
                <Title>
                    Title: {title}
                </Title>
            </div>
        )
    } else {
        return (
            <div style={{height: "10%",}}>
                <Title>
                    Welcome back, {userName}
                </Title>
            </div>
        )
    }
}

export default PageTitle;

