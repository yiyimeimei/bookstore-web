import React from 'react';
import 'antd/dist/antd.css';
import '../css/bootstrap-3.3.7-dist/css/bootstrap.css';
import {Button, Col, List, Table} from "antd";
import {CheckOutlined} from "@ant-design/icons";
import {getCartByCustomerId} from "../services/cartService";
import {Link} from "react-router-dom";
import {addOrder} from "../services/orderService";



class OrderTable extends React.Component {

    constructor(props) {
        super(props);
        this.state = {books:[],info:[],order:[]};
    }
    handleBookInfo = data => {
        this.setState({
                books: [...this.state.books, data],
            }
        )
    };
    /*handleOrderInfo = data => {
        this.setState({
                order: [...this.state.order, data],
            }
        )
    };*/

    handleClick ()
    {
        let userstr2 = localStorage.getItem("user");
        let user2 = JSON.parse(userstr2);
        const callback = () =>{

        }
        addOrder(user2.userId, callback);
    }
    componentDidMount() {
        let userstr1 = localStorage.getItem("user");
        let user1 = JSON.parse(userstr1);
        getCartByCustomerId(user1.userId, this.handleBookInfo);
    }
    render() {
        return (
            <div>
                <Col span={18} offset={3}>
                    <List
                        itemLayout="vertical"
                        pagination={{
                            onChange: page => {
                                console.log(page);
                            },
                            pageSize: 4,
                        }}
                        dataSource={this.state.books}
                        renderItem={item => (
                            <List.Item
                                key={item.title}
                            >
                                <List.Item.Meta
                                    title={item.title}
                                    description="*1"
                                />
                                <div align="right" className="money-font">{item.price}</div>
                            </List.Item>
                        )}
                    />
                    {/*<Table columns={columns} dataSource={this.state.info} size="large">
                    </Table>*/}
                </Col>

                <Col offset={10} span={4}>
                    <Link to={{
                        pathname: '/MyOrderList'}}
                    >
                        <Button type="submit" icon={<CheckOutlined/>} size={"large"} onClick={this.handleClick.bind(this)}>
                            确认提交订单
                        </Button>
                    </Link>
                </Col>
            </div>

        )
    }
}export default OrderTable;