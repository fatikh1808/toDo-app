import React from 'react';
import {Col} from 'antd';
import {Menu} from 'antd';
import {
    CalendarOutlined,
    FieldTimeOutlined,
    PlusOutlined,
    FileTextOutlined, LogoutOutlined,
    PieChartOutlined,
    TeamOutlined, DownCircleOutlined
} from "@ant-design/icons/dist/index.umd";
import s from './style.module.css';
import {Link} from "react-router-dom";

function Sider({logOut, showModal}) {
    return (
        <Col span={1} className={s.siderCol}>
            <Menu mode="inline" className={s.menu}>
                <div className={s.firstDiv}>
                    <div className={s.firstDivInner}>
                        <DownCircleOutlined className={s.icon}/>
                    </div>
                    <div onClick={showModal}>
                        {/*<Link to={'/newTask'}>*/}
                            <PlusOutlined className={s.icon}/>
                        {/*</Link>*/}
                    </div>
                </div>
                <div>
                    <FileTextOutlined className={s.icon}/>
                    <TeamOutlined className={s.icon}/>
                    <PieChartOutlined className={s.icon}/>
                    <FieldTimeOutlined className={s.icon}/>
                    <CalendarOutlined className={s.icon}/>
                </div>
                <div className={s.thirdDiv} onClick={logOut}>
                    <LogoutOutlined className={s.icon}/>
                </div>
            </Menu>
        </Col>
    )
}

export default Sider;

