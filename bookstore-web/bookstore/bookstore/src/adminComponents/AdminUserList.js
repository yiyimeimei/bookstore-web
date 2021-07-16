import React from 'react'
import {Table, Switch} from "antd";
import {customerDisabled, customerEnabled, getAllCustomers} from "../services/userService";


const {Column} = Table;

class AdminUserList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            allCustomers: [],
            personalInfo: {},
            /*deleteUserId: {},
            visible: false,*/
        }
    }
    /*showModal = (userId) => {
        this.setState({
            visible: true,
            deleteUserId: userId,
        });
    };
    hideModal = () => {
        this.setState({
            visible: false,
        });
    };*/
    handleUserInfo = data => {
        this.setState({
            personalInfo: data,
        }, () => {

        });
    };
    handleAllCustomers = data => {
        this.setState({
            allCustomers: data,
        }, () => {

        });
    };
    handleSwitchOnClick = (userId, userState) => {
        if(userState === 1)
        {
            customerDisabled(userId, () => {
                this.setState({
                    allCustomers: []
                });
            });
        }
        else
        {
            customerEnabled(userId, () => {
                this.setState({
                    allCustomers: []
                });
            });
        }
        setTimeout(() => getAllCustomers(this.handleAllCustomers), 200);

    }
    switchOnClicked = (userId, userState) =>{

        this.handleSwitchOnClick(userId,userState);
    };

    componentDidMount() {
        let userstr = localStorage.getItem("user");
        let user = JSON.parse(userstr);
        this.handleUserInfo(user);
        getAllCustomers(this.handleAllCustomers);
    }

    renderCustomerList = () => {
        const columns = [
            {
                title: '用户名',
                dataIndex: 'name',
                key: 'name',
            },
            {
                title: '电话',
                dataIndex: 'tel',
                key: 'tel',
            },
            {
                title: '地址',
                dataIndex: 'address',
                key: 'address',
            },
            {
                title: '消费额',
                dataIndex: 'consumption',
                key: 'consumption',
            },
            {
                title: '用户权限管理',
                dataIndex: 'modify',
                key: 'modify',
                render: (text, record, index) => (
                    //console.log(record.userState)
                    <Switch checkedChildren="正常"
                            unCheckedChildren="禁用"
                            checked={record.userState}
                            onClick={this.switchOnClicked.bind(this,record.userId,record.userState)}
                    >
                    </Switch>
                )



            /*<Switch checkedChildren="正常"
                    unCheckedChildren="禁用"
                    checked={userState}
                    onClick={this.switchOnClicked.bind(this,userId,userState)}
            >
            </Switch>*/




            }
        ];
        return (
            <div>
                <Table columns={columns}
                       dataSource={this.state.allCustomers}
                    /*scroll={{y: 500}}*/>
                </Table>
                {/*{this.renderModal(this.state.bookToModify)}*/}
                {/*<Table dataSource={this.state.allCustomers}>
                        <Column title='用户名' dataIndex='name'/>
                        <Column title='电话' dataIndex='tel'/>
                        <Column title='地址' dataIndex='address'/>
                        <Column title='用户权限管理' dataIndex='modify'

                        />
                    </Table>*/}
            </div>
        );


    };


    render() {
        return (
            <div>
                {/*<Modal
                    title="Modal"
                    visible={this.state.visible}
                    onOk={this.modalOnClicked}
                    onCancel={this.hideModal}
                    okText="是"
                    cancelText="否"
                >
                    <p>是否确认要删除此账户信息？</p>
                </Modal>*/}
                <h1>所有顾客</h1>
                {this.renderCustomerList()}
            </div>
        )
    }
}

export default AdminUserList;