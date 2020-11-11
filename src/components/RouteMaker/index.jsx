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

function RouteMaker({isAuthenticated}) {


    return (
        <Router>
            {isAuthenticated ?
                <Switch>
                    <Route path={'/newTask'} component={TaskPage}/>
                    <Route path={'/userSettings'} component={UserPage}/>
                    <Route path={'/tasks'} component={TaskDistributor}/>
                    <Redirect to={'/tasks'}/>
                </Switch>
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