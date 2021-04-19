/**
 * Created by xiaolv on 20/1/16.
 */
import React, { Component } from 'react';
import { Spin } from "antd";
import './style.less'

export default class Loading extends Component {
    render() {
        return (
            <div className={'my-loading'}>
                <Spin size="large" />
            </div>
        )
    }
}