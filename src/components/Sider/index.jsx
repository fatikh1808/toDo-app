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
import {Layout} from "antd";

const {Sider} = Layout;

function SideBar({logOut, showModal}) {
    return (
        <Sider width={80} style={{
            color: 'white', overflow: 'auto',
            height: '100vh',
            position: 'fixed',
            left: 0,
            background: "#234d80",

        }}>
            <div className={s["flex-container"]}>
                <div className={s["flex-item"]}>
                    <div className={s.divIcon}>
                        <DownCircleOutlined className={s.icon}/>
                    </div>
                    <div onClick={showModal} className={s.divIcon}>
                        <PlusOutlined className={s.icon}/>
                    </div>
                </div>
                <div style={{textAlign: "center"}} className={s["flex-item"]}>
                    <div className={s.divIcon}>
                        <FileTextOutlined className={s.icon}/>
                    </div>
                    <div className={s.divIcon}>
                        <TeamOutlined className={s.icon}/>
                    </div>
                    <div className={s.divIcon}>
                        <PieChartOutlined className={s.icon}/>
                    </div>
                    <div className={s.divIcon}>
                        <FieldTimeOutlined className={s.icon}/>
                    </div>
                    <div className={s.divIcon}>
                        <CalendarOutlined className={s.icon}/>
                    </div>
                </div>
                <div className={s["flex-item"]} onClick={logOut}>
                    <LogoutOutlined className={s.icon}/>
                </div>
            </div>
        </Sider>
    )
}

export default SideBar;

