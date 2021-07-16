import React from 'react'
import '../css/bootstrap-3.3.7-dist/css/bootstrap.css';
import '../css/adminPage.css'
import {Link, Redirect} from "react-router-dom";

class SideBar extends React.Component {
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

    static defaultProps = {
        activeSection: 0,
    };

    renderMenu = () => {

            let menu = [];
            menu.push((
                <li className={this.props.activeSection === 0 ? "active" : ""}>
                    <Link to="/admin/book">书籍管理</Link>
                </li>
            ));
            menu.push((
                <li className={this.props.activeSection === 1 ? "active" : ""}>
                    <Link to="/admin/user">用户管理</Link>
                </li>
            ));
            menu.push((
                <li className={this.props.activeSection === 2 ? "active" : ""}>
                    <Link to="/admin/order">订单管理</Link>
                </li>
            ));
            menu.push((
                <li className={this.props.activeSection === 3 ? "active" : ""}>
                    <Link to="/admin/statistics">统计</Link>
                </li>
            ));
            return menu;
    };

    render() {
        return (
            <div>
                <div className="col-sm-3 col-md-2 sidebar">
                    <ul className="nav nav-sidebar">
                        {this.renderMenu()}
                    </ul>
                    <ul className="nav nav-sidebar">
                    </ul>
                    <ul className="nav nav-sidebar">
                    </ul>
                </div>
            </div>
        );
    }
}

export default SideBar;