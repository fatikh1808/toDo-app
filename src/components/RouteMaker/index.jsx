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
import s from './style.module.css';


function RouteMaker({isAuthenticated, getTaskGroups, allGroups, logOut}) {

    const [visible, setVisible] = React.useState(false);
    console.log("route maker", allGroups)
    const showModal = () => {
        setVisible(!visible)
    };

    const handleOk = e => {
        setVisible(!visible)
    };

    const handleCancel = e => {
        setVisible(!visible)
    };

    isAuthenticated = true;

    return (
        <React.Fragment>
            {
                isAuthenticated ?
                    <Layout>
                        <SideBar logOut={logOut} showModal={showModal}/>
                        <Layout className={s.firstLayer}>
                            <LeftBar getTaskGroups={getTaskGroups} allGroups={allGroups}/>
                            <NewTaskPage handleCancel={handleCancel} handleOk={handleOk} visible={visible}/>
                            <UserPage/>
                            <Layout className={s.secondLayer}>
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