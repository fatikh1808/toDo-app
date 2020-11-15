import React from 'react';
import {Image, Modal} from "antd";
import {Typography} from 'antd';

const {Text} = Typography;

function UserPage({isVisible, visibleChanger, user}) {
    return (
        <Modal
            title="User info"
            visible={isVisible}
            closable={false}
            mask={false}
            onOk={() => visibleChanger(!isVisible)}
            onCancel={() => visibleChanger(!isVisible)}
            footer={null}
        >

            <Image
                width={100}
                src={user.avatar_url}
            />
            <div/>
            Name: <Text code>{user.name}</Text>
            <div/>
            LastName: <Text code>{user.lastName}</Text>
            <div/>
            Country: <Text code>{user.Country}</Text>
            <div/>
            Date Of Birth: <Text code>{user.DateBirth}</Text>
        </Modal>
    );
}

export default UserPage;