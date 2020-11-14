import React from "react";
import 'antd/dist/antd.css'

require("dotenv").config();
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
            uri: "https://gql-2.test.serafim.help/v1/graphql",
            headers: {
                "x-hasura-admin-secret": "123-123-123-123-123"
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
