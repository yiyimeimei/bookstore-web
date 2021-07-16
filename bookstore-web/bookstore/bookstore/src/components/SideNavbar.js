import React from 'react';
import 'antd/dist/antd.css';
import {Layout, Menu, Breadcrumb} from 'antd';
import {UserOutlined, LaptopOutlined, NotificationOutlined} from '@ant-design/icons';

const {SubMenu} = Menu;
const {Header, Content, Sider} = Layout;


class SideNavbar extends React.Component {
    render() {
        return (
            <div>
                <Layout>
                    <Sider width={200} className="site-layout-background">
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                            style={{height: '100%', borderRight: 0}}
                        >
                            <SubMenu key="sub1" icon={<UserOutlined/>} title="Menu">
                                <Menu.Item key="1">
                                    E-Book</Menu.Item>
                                <Menu.Item key="2">Cart</Menu.Item>
                                <Menu.Item key="3">Order</Menu.Item>
                                <Menu.Item key="4">Profile</Menu.Item>
                            </SubMenu>
                        </Menu>
                    </Sider>
                </Layout>
            </div>


        )

    }
}

export default SideNavbar;