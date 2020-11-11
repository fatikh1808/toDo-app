import React from 'react';
import AuthForm from "../AuthForm";

function Login({login, users}) {
    return (
        <AuthForm login={login} users={users}/>
    );
}

export default Login;

