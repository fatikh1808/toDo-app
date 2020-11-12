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
        <Row className={s.sortersRow}>
            <Col span={20}>
            </Col>
            <Col span={1}>
                <RedoOutlined className={s.sortIcon}/>
            </Col>
            <Col span={3}>
                <ColumnHeightOutlined className={s.sortIcon}/>
                <ColumnWidthOutlined className={s.sortIcon}/>
                <OrderedListOutlined className={s.sortIcon}/>
            </Col>
        </Row>
    )
}

export default Sorters;

