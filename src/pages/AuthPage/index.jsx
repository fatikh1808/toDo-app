import React from 'react';
import {Tabs} from 'antd';
import Login from "../../components/Login";
import SignUp from "../../components/SignUp";

const {TabPane} = Tabs;

const AuthPage = ({login, signUp, users}) => {
    return (
        <div style={{margin: 100}}>
            <Tabs defaultActiveKey="1" centered={true} size={'large'}>
                <TabPane tab="Login" key="1" style={{textAlign: "-webkit-center"}}>
                    <Login login={login} users={users}/>
                </TabPane>
                <TabPane tab="SignUp" key="2" style={{textAlign: "-webkit-center"}}>
                    <SignUp signUp={signUp}/>
                </TabPane>
            </Tabs>
        </div>
    )
};

export default AuthPage