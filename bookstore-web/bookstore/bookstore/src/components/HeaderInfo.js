import React from 'react';
import { Row, Col } from 'antd';
import '../css/index.css'
import '../css/homePage.css';
import 'antd/dist/antd.css';
import '../css/bootstrap-3.3.7-dist/css/bootstrap.css';
import {getUser, logout} from "../services/userService";
import {getBooks} from "../services/bookService";


export class HeaderInfo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            personalInfo: {},
        }
    }
    handlePersonalInfo = data => {
        this.setState({
            personalInfo: data,
        }, () => {

        });
    };

    componentDidMount() {
        let userstr = localStorage.getItem("user");
        let user = JSON.parse(userstr);
        this.handlePersonalInfo(user);
        //getBooks(this.handleAllBooks);
    }
    renderAdminButton = () => {

        if(this.state.personalInfo.userType === 0)
        {
            return(
                <>
                    <li><a href="/admin/book">管理员页面</a></li>
                </>
            );
        }
        else
        {
            return null;
        }
    }
    renderCartButton = () => {

        if(this.state.personalInfo.userType === 1)
        {
            return(
                <>
                    <li><a href="/Cart">购物车</a></li>
                </>
            );
        }
        else
        {
            return null;
        }
    }
    renderOrderButton = () => {

        if(this.state.personalInfo.userType === 1)
        {
            return(
                <>
                    <li><a href="/MyOrderList">订单</a></li>
                </>
            );
        }
        else
        {
            return null;
        }
    }
    renderConsumptionButton = () => {

        if(this.state.personalInfo.userType === 1)
        {
            return(
                <>
                    <li><a href="/MyConsumptionList">消费情况</a></li>
                </>
            );
        }
        else
        {
            return null;
        }
    }

    render(){
        const user = JSON.parse(localStorage.getItem("user"));
        return (
            <div>
                <nav className="navbar navbar-default container-fluid">
                    <div className="container">
                        <div className="navbar-header">

                            <a className="navbar-brand" href="/Home">E-BOOK</a>
                        </div>
                        <div id="navbar" className="navbar-collapse collapse">
                            <ul className="nav navbar-nav">
                                <li><a href="/Home">首页</a></li>
                                {this.renderCartButton()}
                                {this.renderAdminButton()}
                                {this.renderOrderButton()}
                                {this.renderConsumptionButton()}
                            </ul>
                            <ul className="nav navbar-nav navbar-right">
                                {/*<Row align="middle">
                                    <li>当前账号：{user.username}</li>
                                    <li><a onClick={logout}>退出</a></li>
                                </Row>*/}
                                <li>当前用户名：{user.username}</li>
                                <li><a onClick={logout}>退出</a></li>

                            </ul>

                            {/*<Row>
                                <Col xs={0} sm={0} md={19} lg={19} xl={19} xxl={20}>
                                    {user != null ? <UserAvatar user={user}/> : null}
                                </Col>
                            </Row>*/}
                        </div>
                    </div>
                </nav>
            </div>

        )

        /*return(
            <div id="header">
                <div id="header-content">
                    <Row>
                        <Col xs={24} sm={24} md={5} lg={5} xl={5} xxl={4}>
                            <a id="logo" href={"/"}>
                                <img alt="logo"  className="logo" src={logo} style={{ height:45 }}/>
                                <img alt="Book Store"  className="logo-font" src={logoFont} style={{ height:40 }}/>
                            </a>
                        </Col>
                        <Col xs={0} sm={0} md={19} lg={19} xl={19} xxl={20}>
                            {user != null ? <UserAvatar user={user}/> : null}
                        </Col>
                    </Row>
                </div>
            </div>
        );*/
    }
}