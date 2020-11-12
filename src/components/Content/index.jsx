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


function Content({userName, avatar, id, allTasks}) {

    let {path} = useRouteMatch();
    let {groupTitle} = useParams();


    const {loading, error, data} = useQuery(GET_GROUP_TASKS, {
        variables: {
            id: id,
            title: groupTitle
        }
    });

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
                    {error}
                </div>
            )
        }
        else {
            return (
                <Col span={20} className={s.ContentCol}>
                    <TopUtils avatar={avatar}/>
                    <PageTitle userName={data.groups[0].title} groupPage/>
                    <Sorters/>
                    <TaskItems groupPage data={data.groups[0].task_gr}/>
                </Col>
            )
        }
    } else {
        return (
            <Col span={20} className={s.ContentCol}>
                <TopUtils avatar={avatar}/>
                <PageTitle userName={userName}/>
                <Sorters/>
                <TaskItems allTasks={allTasks}/>
            </Col>
        )
    }

}

export default Content;

