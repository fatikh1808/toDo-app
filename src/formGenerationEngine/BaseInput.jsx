import React from 'react';
import {Input} from 'antd';

function BaseInput({id, schema, value, onChange}) {
    return (
        <div style={{marginTop: 30}}>
            <Input
                id={id}
                placeholder={schema.title}
                onChange={event => onChange(event.target.value || null)}
                value={value || ""}
            />
        </div>
    )
}

export default BaseInput;