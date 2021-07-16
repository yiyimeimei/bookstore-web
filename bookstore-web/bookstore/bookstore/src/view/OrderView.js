import React from 'react';
import WrappedLoginForm from '../components/LoginForm';
import '../css/loginPage.css';
import '../css/login.css';
import 'antd/dist/antd.css';
import {Col, Divider, Row} from "antd";
import Footer from "../components/Footer";
import {withRouter} from "react-router-dom";
import StepLine1 from "../components/StepLine";
import Address from "../components/Address";
import OrderTable from "../components/OrderTable";


class OrderView extends React.Component{





    render(){
        return(
            <div>
                <Row>
                    <Divider align="center">Make An Order</Divider>
                </Row>
                <br/>
                <br/>
                <Col span={18} offset={3}>
                    <StepLine1/>
                </Col>
                <br/>
                {/*<Col span={12} offset={6}>
                    <Address/>

                </Col>*/}
                <br/>
                <Col offset={6} span={12}>
                    <OrderTable  />
                </Col>


            </div>
        );

    }
}
export default withRouter(OrderView);