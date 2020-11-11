import React from 'react';
import Form from "@rjsf/core";
import {Button} from "antd";
import BaseInput from '../../formGenerationEngine/BaseInput'

const widgets = {
    BaseInput,
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
            "title": "Username"
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
        "ui:field": "string",
        "ui:autocomplete": "family-name",
    },
    "password": {
        "ui:widget": "password",
        "ui:field": "string"
    }
};

function SignIn() {

    const log = (type) => console.log.bind(console, type);

    return (
        <div style={{width: "20%"}}>
            <Form schema={schema}
                  uiSchema={uiSchema}
                  widgets={widgets}
                  onChange={log("changed")}
                  onSubmit={log("submitted")}
                  onError={log("errors")}>
                <div style={{marginTop: 30}}>
                    <Button type="submit">
                        Submit
                    </Button>
                </div>
            </Form>
        </div>
    )
}

export default SignIn;

