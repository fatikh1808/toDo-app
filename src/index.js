import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
require("dotenv").config();
import {ApolloClient, ApolloProvider, InMemoryCache, HttpLink} from '@apollo/client';

const createApolloClient = () => {
    return new ApolloClient({
        link: new HttpLink({
            uri: "https://gql-2.test.serafim.help/v1/graphql",
            headers: {
                "x-hasura-admin-secret":  "123-123-123-123-123"
            }
        }),
        cache: new InMemoryCache(),
    });
};


const client = createApolloClient();

ReactDOM.render(
    <ApolloProvider client={client}>
        <App/>
    </ApolloProvider>,
    document.getElementById('root')
);

reportWebVitals();
