import React from 'react';
import {Steps} from 'antd';
import {
    ClockCircleOutlined, FormOutlined, HourglassOutlined,
    LoadingOutlined,
    PayCircleOutlined,
    ShoppingCartOutlined,
    SmileOutlined
} from '@ant-design/icons';
import 'antd/dist/antd.css';
import '../css/bootstrap-3.3.7-dist/css/bootstrap.css';

const {Step} = Steps;

class StepLine1 extends React.Component {

    render() {
        return (
            <div>
                <Steps current={1}>
                    <Step status="process" title="Fill in your information" icon={<FormOutlined/>}/>
                    <Step status="wait" title="Pay" icon={<PayCircleOutlined/>}/>
                    <Step status="wait" title="Waiting for delivery" icon={<HourglassOutlined/>}/>
                    {/*
                    <Step status="wait" title="等待收货" icon={<ClockCircleOutlined />}/>
*/}
                    <Step status="wait" title="Done" icon={<SmileOutlined/>}/>
                </Steps>
            </div>

        )
    }
}

export default StepLine1;



