import React from 'react';
import Form from "@rjsf/core";

const schema = {
    "type": "object",
    "required": [
        "username",
        "password"
    ],
    "properties": {
        "username": {
            "type": "string",
            "title": "User name",
            "default": "Chuck"
        },
        "password": {
            "type": "string",
            "title": "Password"
        }
    }
};

const uiSchema = {
    "username": {
        "ui:autofocus": true,
        "ui:emptyValue": "",
        "ui:autocomplete": "family-name"
    },
    "password": {
        "ui:widget": "password"
    }
};

const SignIn = () => {
    const log = (type) => console.log.bind(console, type);

    return (
        <Form schema={schema}
              uiSchema={uiSchema}
              onChange={log("changed")}
              onSubmit={log("submitted")}
              onError={log("errors")}/>
    )
}

export default SignIn;

