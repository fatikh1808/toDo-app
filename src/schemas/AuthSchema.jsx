import React from 'react';


const AuthSchema = () => {

    console.log(parent)

    const log = (type) => console.log.bind(console, type);

    return (
        <Form schema={schema}
              uiSchema={uiSchema}
              onChange={log("changed")}
              onSubmit={log("submitted")}
              onError={log("errors")}/>
    )
};

export default AuthSchema;