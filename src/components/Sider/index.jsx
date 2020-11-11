import React from 'react';
import Form from "@rjsf/core";
import {Input} from "antd";

const SchemaInput = ({schema, value, onChange}) => {
    return (
        <Input
            id={schema.id}
            value={value || ""}
            onChange={event => onChange(event.target.value || null)}
            placeholder={schema.title}/>
    )
};

const schema = {
    "type": "object",
    "required": [
        "username",
        "password"
    ],
    "properties": {
        "username": {
            "type": "string",
            "title": "Username",
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
        "ui:autocomplete": "family-name",
        "ui:widget": SchemaInput
    },
    "password": {
        "ui:widget": "password",
        "ui:help": "Hint: Make it strong!"
    }
};

const Login = () => {

    const log = (type) => console.log.bind(console, type);

    return (
        <Form schema={schema}
              uiSchema={uiSchema}
              onChange={log("changed")}
              onSubmit={log("submitted")}
              onError={log("errors")}/>
    )
};

export default Login;

