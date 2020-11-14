import React from 'react';
import {Col} from 'antd';
import TopUtils from "./../TopUtils";
import PageTitle from "./../Title";
import Sorters from "./../Sorters";
import {useRouteMatch, useParams} from 'react-router-dom';

import TaskItems from "./../../components/TaskItems";
import s from './style.module.css';
import {gql, useQuery} from "@apollo/client/index";

const GET_GROUP_TASKS = gql`
  query($id: Int!, $title: String!) {
  groups(where: {title: {_eq: $title}}) {
    title
    task_gr(where: {user_id: {_eq: $id}}) {
      id
      title
      description
       task_group {
        title
      }
    }
  }
}`;


function Content({userName, avatar, id, allTasks, getActiveTaskGroup, activeGroupTasks}) {

    let {path} = useRouteMatch();
    let {groupTitle} = useParams();

    const {loading, error, data} = useQuery(GET_GROUP_TASKS, {
        variables: {
            id: id,
            title: groupTitle
        }
    });

    React.useEffect(() => {
        if (data && path !== '/tasks') {
            getActiveTaskGroup(data.groups[0])
        }
    }, [data, path]);

    const Returner = (username, data, groupPage) => {
        return (
            <Col span={24} className={s.ContentCol}>
                <TopUtils avatar={avatar}/>
                <PageTitle userName={username} groupPage={groupPage}/>
                <Sorters/>
                <TaskItems groupPage data={data}/>
            </Col>
        )
    };

    if (path !== '/tasks') {
        if (loading) {
            return (
                <div>
                    loading
                </div>
            )
        } else if (error) {
            return (
                <div>
                    error
                </div>
            )
        }
        else {
            if (Object.keys(activeGroupTasks).length === 0) {
                return (
                    <div>
                        loading...
                    </div>
                )
            } else {
                return (
                    Returner(activeGroupTasks.title, activeGroupTasks.task_gr, true)
                )
            }
        }
    } else {
        return (
            Returner(userName, allTasks, false)
        )
    }

}

export default Content;

