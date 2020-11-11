import React from 'react';
import {Col, Row} from "antd";
import {
    ColumnHeightOutlined,
    ColumnWidthOutlined,
    OrderedListOutlined,
    RedoOutlined
} from "@ant-design/icons/es/icons/index";

function Sorters() {
    return (
        <Row style={{heigh: '5%'}}>
            <Col span={20}>
            </Col>
            <Col span={1}>
                <RedoOutlined style={{fontSize: 25, margin: 5}}/>
            </Col>
            <Col span={3}>
                <ColumnHeightOutlined style={{fontSize: 25, margin: 5}}/>
                <ColumnWidthOutlined style={{fontSize: 25, margin: 5}}/>
                <OrderedListOutlined style={{fontSize: 25, margin: 5}}/>
            </Col>
        </Row>
    )
}

export default Sorters;

