import React from 'react';
import {Tabs} from 'antd';
import Login from "../../components/Login";
import SignIn from "../../components/SignIn";

const {TabPane} = Tabs;

const AuthPage = () => {
    return (
        <div style={{margin: 100}}>
            <Tabs defaultActiveKey="1" centered={true} size={'large'}>
                <TabPane tab="Login" key="1" style={{textAlign: "-webkit-center"}}>
                    <Login/>
                </TabPane>
                <TabPane tab="SignIn" key="2" style={{textAlign: "-webkit-center"}}>
                    <SignIn/>
                </TabPane>
            </Tabs>
        </div>
    )
};

export default AuthPage