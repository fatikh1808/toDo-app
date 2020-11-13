import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route, Redirect
} from "react-router-dom";

import TaskPage from "../../containers/TaskPage";
import UserPage from "../../containers/UserPage";
import TaskDistributor from "../../containers/TaskDistributor";
import AuthPage from "../../containers/AuthPage";
import {Col, Row} from "antd";
import Sider from "../Sider";
import LeftBar from "../LeftBar";
import NewTaskPage from "../../containers/NewTaskPage";

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
        <Router>
            {isAuthenticated ?
                <Row>
                    <Sider logOut={logOut} showModal={showModal}/>
                    <Col span={23} style={{backgroundColor: 'red'}}>
                        <Row>
                            <LeftBar getTaskGroups={getTaskGroups} allGroups={allGroups}/>
                            <NewTaskPage handleCancel={handleCancel} handleOk={handleOk} visible={visible}/>
                            <Switch>
                                {/*<Route path={'/newTask'} component={NewTaskPage}/>*/}
                                <Route path={'/userSettings'} component={UserPage}/>
                                <Route path={'/tasks/:groupTitle/:taskId'} component={TaskPage}/>
                                <Route path={'/tasks/:groupTitle'} component={TaskDistributor}/>
                                <Route path={'/tasks'} component={TaskDistributor}/>
                                <Redirect to={'/tasks'}/>
                            </Switch>
                        </Row>
                    </Col>
                </Row>
                :
                <Switch>
                    <Route exact path={'/'} component={AuthPage}/>
                    <Redirect to={'/'}/>
                </Switch>

            }
        </Router>
    )
}

export default RouteMaker