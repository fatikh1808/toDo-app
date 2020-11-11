import React, { useRef} from 'react';
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
        "ui:field": "string",
        "ui:help": "Hint: Make it strong!"
    }
};

function Login() {

    const form = useRef(null)

    function onSubmit(data) {
        console.log({ data })
    }

    const log = (type) => console.log.bind(console, type);

    window.ss = form

    return (
        <div style={{width: "20%"}}>
            <Form
                ref={form}
                schema={schema}
                uiSchema={uiSchema}
                widgets={widgets}
                onChange={log("changed")}
                onSubmit={onSubmit}
                onError={log("errors")}
            >
                <Button type="submit" onClick={(event) => {

                    form.current.onSubmit(event)
                }}>
                    Submit sd
                </Button>
            </Form>
        </div>
    )
}

export default Login;

