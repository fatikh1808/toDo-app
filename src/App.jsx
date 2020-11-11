import React from "react";
import 'antd/dist/antd.css'
import AuthPage from "./pages/AuthPage";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import TaskDistributor from "./pages/TaskDistributor";
import UserPage from "./pages/UserPage";

const Routes = [
    {
        "path": "/userSettings",
        "component": UserPage
    },
    {
        "path": "/tasks",
        "component": TaskDistributor
    },
    {
        "path": "/",
        "component": AuthPage
    }
];

const App = () => {
    return (
        <Router>
            <Switch>
                {
                    Routes.map(item => (
                        <Route path={item.path} key={item.path}>
                            {item.component}
                        </Route>
                    ))
                }
            </Switch>
        </Router>
    );
};

export default App;
