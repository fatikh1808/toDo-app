import React from 'react';
import {Col, Row} from "antd";
import {
    ColumnHeightOutlined,
    ColumnWidthOutlined,
    OrderedListOutlined,
    RedoOutlined
} from "@ant-design/icons/es/icons/index";
import s from '../TaskCard/style.module.css';

function Sorters() {
    return (
        <Row>
            <Col span={20}>
            </Col>
            <Col span={1}>
                <RedoOutlined className={s.icon}/>
            </Col>
            <Col span={3}>
                <ColumnHeightOutlined className={s.icon}/>
                <ColumnWidthOutlined className={s.icon}/>
                <OrderedListOutlined className={s.icon}/>
            </Col>
        </Row>
    )
}

export default Sorters;

