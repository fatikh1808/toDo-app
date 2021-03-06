import React from "react";
import 'antd/dist/antd.css'
import {ApolloClient, ApolloProvider, InMemoryCache, HttpLink} from '@apollo/client';
import {Provider} from "react-redux";
import configureStore from './store';
import {
    BrowserRouter as Router
} from "react-router-dom";

import RouteMaker from "./containers/RouteMaker";


const createApolloClient = () => {
    return new ApolloClient({
        link: new HttpLink({
            uri: "https://to-do.hasura.app/v1/graphql",
            headers: {
                "x-hasura-admin-secret": "password-for-todo-app"
            }
        }),
        cache: new InMemoryCache(),
    });
};


const client = createApolloClient();

const store = configureStore();

const App = () => {

    return (
        <ApolloProvider client={client}>
            <Provider store={store}>
                <Router>
                    <RouteMaker/>
                </Router>
            </Provider>
        </ApolloProvider>
    );
};

export default App;
