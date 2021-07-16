import React from "react";
import 'antd/dist/antd.css';
import '../css/bootstrap-3.3.7-dist/css/bootstrap.css';
import '../css/adminPage.css'
import {logout} from "../services/userService";

class NavBar extends React.Component {

    render() {
        return (
            <nav className="navbar navbar-default navbar-fixed-top" style={{zIndex: 99}}>
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse"
                                data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar">
                                </span>
                            <span className="icon-bar">
                                </span>
                            <span className="icon-bar">
                                </span>
                        </button>
                        <a className="navbar-brand" href="#">E-BOOK管理员系统</a>
                    </div>
                    <div id="navbar" className="navbar-collapse collapse">
                        <ul className="nav navbar-nav navbar-right">
                            <li><a href="/Home">首页</a></li>
                            {/*<li><a href="#">设置</a></li>
                            <li><a href="#">帮助</a></li>*/}
                            <li><a href="" onClick={logout}>退出</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default NavBar;