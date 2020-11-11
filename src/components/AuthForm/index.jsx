import React from 'react';
import {Form, Input, Button, Checkbox} from 'antd';

function AuthForm({signUp, login, signup, users}) {

    const onFinish = (values) => {
        login ? login(values.username, values.password, users) : signUp(values.username, values.password, values.name)
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Form
            name="basic"
            initialValues={{
                remember: true,
            }}

            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            style={{width: "30%"}}
        >
            <Form.Item
                label="Username"
                name="username"
                rules={[
                    {
                        required: true,
                        message: 'Please input your username!',
                    },
                ]}
            >
                <Input/>
            </Form.Item>

            <Form.Item

                label="Password"
                name="password"
                rules={[
                    {
                        required: true,
                        message: 'Please input your password!',
                    },
                ]}
            >
                <Input.Password/>
            </Form.Item>
            {signup ? <><Form.Item
                    label="2Password"
                    name="2password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your 2password!',
                        },
                    ]}
                >
                    <Input.Password/>
                </Form.Item>
                    <Form.Item
                        label="Name"
                        name="name"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your email!',
                            },
                        ]}
                    >
                        <Input/>
                    </Form.Item>
                </>
                : null}
            <Form.Item name="remember" valuePropName="checked">
                <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
}

export default AuthForm