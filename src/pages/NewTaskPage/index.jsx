import React from 'react';
import {Theme} from '@rjsf/antd';
import {withTheme} from '@rjsf/core';
import s from './syle.css';
import {gql, useMutation} from "@apollo/client/index";
import {Modal} from 'antd';

const ADD_NEW_TASK = gql`
 mutation ($description: String!, $group: Int!, $title: String!, $user: Int!, $id: Int!) {
  insert_tasks(objects: {description: $description, group_id: $group, title: $title, user_id: $user, id: $id}) {
    returning {
      comments_id
      created_at
      description
      followers_id
      group_id
      id
      isDone
      title
      updated_at
      user_id
       task_group {
        title
      }
    }
  }
}
`;

const ThemedForm = withTheme(Theme);

function NewTaskPage({allGroups, addNewTask, handleCancel, handleOk, visible}) {
    // let clients = JSON.stringify(allGroups.map(item => item.title));
    // console.log(clients);

    const schema = {
        "description": "In this page, you can create new task",
        "type": "object",
        "required": [
            "title",
            "description"
        ],
        "properties": {
            "title": {
                "type": "string",
                "title": "Title of task"
            },
            "description": {
                "type": "string",
                "title": "Description"
            },
            "user": {
                "type": "number",
                "title": "User",
                "enum": [
                    1,
                    2,
                    3,
                    4
                ],
                "enumNames": ["Dimych", "Georgiy", "Leon", "Insaf"]

            },
            "group": {
                "type": "number",
                "title": "Group",
                "enum": [
                    2, 3, 4, 5, 6, 7, 8
                ],
                "enumNames": [
                    "Management",
                    "Sales",
                    "Operations",
                    "Marketing",
                    "Human Resources",
                    "Finance",
                    "Customer Service"
                ]
            }
        }
    };

    const [data, setData] = React.useState({});

    const [addTodo, {data: settedData}] = useMutation(ADD_NEW_TASK);


    function onSubmit({formData}) {
        addTodo({
            variables: {
                user: formData.user,
                group: formData.group,
                title: formData.title,
                description: formData.description,
                id: Math.floor(Math.random() * Math.floor(100000))
            }
        });
        handleOk(!visible);
    }

    console.log(settedData);

    React.useEffect(() => {
        if (settedData) {
            addNewTask(settedData.insert_tasks.returning[0]);
        }
    }, [settedData]);

    return (
        <Modal
            title="New Task"
            visible={visible}
            closable={false}
            mask={false}
            onOk={handleOk}
            onCancel={handleCancel}
            footer={null}
        >
            <ThemedForm schema={schema}
                        onSubmit={onSubmit}
                        className={'shape'}
                        onError={(error) => console.log("error", error)}
            />
        </Modal>
    )
}

export default NewTaskPage;