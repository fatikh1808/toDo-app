import React from "react";
import 'antd/dist/antd.css'

import {Provider} from "react-redux";
import configureStore from './store';
import RouteMaker from "./containers/RouteMaker";

const store = configureStore();

const App = () => {

    return (
        <Provider store={store}>
            <RouteMaker/>
        </Provider>
    );
};

export default App;
