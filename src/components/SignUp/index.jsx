import React from 'react';
import AuthForm from "../AuthForm";

function SignUp({signUp}) {

    return (
        <AuthForm signup signUp={signUp}/>
    )
}

export default SignUp;

