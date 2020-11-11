import React from 'react';
import {Tabs} from 'antd';
import Login from "../../components/Login";
import SignUp from "../../components/SignUp";

const {TabPane} = Tabs;

const AuthPage = () => {
    return (
        <div style={{margin: 100}}>
            <Tabs defaultActiveKey="1" centered={true} size={'large'}>
                <TabPane tab="Login" key="1" style={{textAlign: "-webkit-center"}}>
                    <Login/>
                </TabPane>
                <TabPane tab="SignUp" key="2" style={{textAlign: "-webkit-center"}}>
                    <SignUp/>
                </TabPane>
            </Tabs>
        </div>
    )
};

export default AuthPage