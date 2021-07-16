import React from 'react';
import 'antd/dist/antd.css';
import '../css/bootstrap-3.3.7-dist/css/bootstrap.css';
import {Input, Row} from "antd";
import {HomeOutlined, PhoneOutlined, UserOutlined} from "@ant-design/icons";

class Address extends React.Component {


    render() {
        return (
            <div>
                <Row>
                    <Input size={"large"}
                           prefix={<UserOutlined/>}
                           allowClear={true}
                           placeholder="Please Input Your Name."
                           maxLength={30}>
                    </Input>
                </Row>
                <br/>
                <Row>
                    <Input size={"large"}
                           prefix={<PhoneOutlined/>}
                           allowClear={true}
                           placeholder="Please Input Your Phone Number."
                           maxLength={15}>
                    </Input>
                </Row>
                <br/>
                <Row>
                    <Input size={"large"}
                           prefix={<HomeOutlined/>}
                           allowClear={true}
                           placeholder="Please Input Your Address."
                           maxLength={60}>
                    </Input>
                </Row>
            </div>


        )
    }
}

export default Address;