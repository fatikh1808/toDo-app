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

function RouteMaker({isAuthenticated}) {
    return (
        <Router>
            {isAuthenticated ?
                <Row>
                    <Sider/>
                    <Col span={23} style={{backgroundColor: 'red'}}>
                        <Row>
                            <LeftBar/>
                            <Switch>
                                {/*<Route path={'/newTask'} component={TaskPage}/>*/}
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