import React from 'react';
import {
    Switch,
    Route, Redirect
} from "react-router-dom";

import TaskPage from "../../containers/TaskPage";
import UserPage from "../../containers/UserPage";
import TaskDistributor from "../../containers/TaskDistributor";
import AuthPage from "../../containers/AuthPage";
import SideBar from "../Sider";
import LeftBar from "../LeftBar";
import NewTaskPage from "../../containers/NewTaskPage";
import {Layout} from 'antd';

function RouteMaker({isAuthenticated, getTaskGroups, allGroups, logOut}) {

    const [visible, setVisible] = React.useState(false);

    const showModal = () => {
        setVisible(!visible)
    };

    const handleOk = e => {
        setVisible(!visible)
    };

    const handleCancel = e => {
        setVisible(!visible)
    };

    return (
        <React.Fragment>
            {
                isAuthenticated ?
                    <Layout>
                        <SideBar logOut={logOut} showModal={showModal}/>
                        <Layout style={{marginLeft: 80}}>
                            <LeftBar getTaskGroups={getTaskGroups} allGroups={allGroups}/>
                            <NewTaskPage handleCancel={handleCancel} handleOk={handleOk} visible={visible}/>
                            <Layout style={{marginLeft: 200, height: '100vh', backgroundColor: "#e2ecf7"}}>
                                <Switch>
                                    <Route path={'/userSettings'} component={UserPage}/>
                                    <Route path={'/tasks/:groupTitle/:taskId'} component={TaskPage}/>
                                    <Route path={'/tasks/:groupTitle'} component={TaskDistributor}/>
                                    <Route path={'/tasks'} component={TaskDistributor}/>
                                    <Redirect to={'/tasks'}/>
                                </Switch>
                            </Layout>
                        </Layout>
                    </Layout>
                    :
                    <Switch>
                        <Route exact path={'/'} component={AuthPage}/>
                        <Redirect to={'/'}/>
                    </Switch>

            }
        </React.Fragment>
    )
}

export default RouteMaker