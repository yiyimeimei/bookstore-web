import React from 'react';
import '../css/loginPage.css';
import '../css/login.css';
import 'antd/dist/antd.css';
import {Col, Divider, Row} from "antd";
import Footer from "../components/Footer";
import {withRouter} from "react-router-dom";
import RegisterForm from "../components/RegisterForm";


class RegisterView extends React.Component{


    render(){
        return(
            <div>
                <Row>
                    <Divider align="center">注册</Divider>
                </Row>
                <div className="something-semantic">
                    <Col offset={10} span={4}>
                        <RegisterForm/>
                    </Col>
                </div>
                <Footer/>
            </div>
        );

    }
}
export default withRouter(RegisterView);