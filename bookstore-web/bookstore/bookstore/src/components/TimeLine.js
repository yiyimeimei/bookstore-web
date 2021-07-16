import React from 'react';
import {Timeline} from 'antd';
import {ClockCircleOutlined} from '@ant-design/icons';
import 'antd/dist/antd.css';
import '../css/bootstrap-3.3.7-dist/css/bootstrap.css';


class TimeLine1 extends React.Component {

    render() {
        return (
            <div>
                <Timeline>
                    <Timeline.Item color="red"
                                   dot={<ClockCircleOutlined className="timeline-clock-icon"/>}>确认订单信息</Timeline.Item>
                    {/*
                    <Timeline.Item color="gray">提交订单</Timeline.Item>
*/}
                    <Timeline.Item color="gray">付款</Timeline.Item>
                    <Timeline.Item color="gray">等待发货</Timeline.Item>
                    <Timeline.Item color="gray">等待收货</Timeline.Item>
                    <Timeline.Item color="gray">订单完成</Timeline.Item>
                </Timeline>
            </div>

        )
    }
}

export default TimeLine1;