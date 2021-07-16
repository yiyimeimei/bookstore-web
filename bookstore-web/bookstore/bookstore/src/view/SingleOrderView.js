import React from 'react';
import WrappedLoginForm from '../components/LoginForm';
import '../css/loginPage.css';
import '../css/login.css';
import 'antd/dist/antd.css';
import {Col, Divider, Row} from "antd";
import {withRouter} from "react-router-dom";
import StepLine1 from "../components/StepLine";
import Address from "../components/Address";
import OrderTable from "../components/OrderTable";
import SingleOrderTable from "../components/SingleOrderTable";
import {getBook, getSingleOrderBook} from "../services/bookService";


class OrderView extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            bookInfo:[]
        };
    }
    componentDidMount(){
        const query = this.props.location.search;
        const arr = query.split('&');
        const bookId = arr[0].substr(4);
        getSingleOrderBook(bookId, (data) => {this.setState({bookInfo: data})});
/*
        console.log(this.state.bookInfo.title);
*/
    }




    render(){
/*
        console.log(this.state.bookInfo[0].title);
*/
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
                    <SingleOrderTable  info={this.state.bookInfo}/>
                </Col>
            </div>
        );

    }
}
export default withRouter(OrderView);