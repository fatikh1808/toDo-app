import React from 'react';
import { Typography } from 'antd';

const { Title } = Typography;

function PageTitle({userName}) {
    return (
        <div style={{height: "10%",}}>
            <Title>
                Welcome back, {userName}
            </Title>
        </div>
    )
}

export default PageTitle;

