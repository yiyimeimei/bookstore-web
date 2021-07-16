import React from 'react';
import WrappedLoginForm from '../components/LoginForm';
import '../css/loginPage.css';
import '../css/login.css';
import 'antd/dist/antd.css';
import {Col, Divider, Row} from "antd";
import Footer from "../components/Footer";
import {withRouter} from "react-router-dom";


class LoginView extends React.Component{


    render(){
        return(
            <div>
                <Row>
                    <Divider align="center">登录</Divider>
                </Row>
                <div className="something-semantic">
                    <Col offset={10} span={4}>
                        <WrappedLoginForm/>
                    </Col>
                </div>
                <Footer/>
            </div>
        );

    }
}
export default withRouter(LoginView);