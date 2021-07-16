import React from 'react';
import 'antd/dist/antd.css';
import '../css/bootstrap-3.3.7-dist/css/bootstrap.css';
import {Button, Col, List, Table} from "antd";
import {CheckOutlined} from "@ant-design/icons";
import {getCartByCustomerId} from "../services/cartService";
import {Link} from "react-router-dom";
import {addOrder} from "../services/orderService";
import {getBook, getBooks, getSingleOrderBook} from "../services/bookService";


const columns = [
    {
        title: 'Book Title',
        dataIndex: 'title',
    },
    {
        title: 'Number',
        dataIndex: 'number',
    },
    {
        title: 'Price',
        dataIndex: 'price',
    },
];

class SingleOrderTable extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            books: []
        };
    }
    /*static defaultProps = {
        bookId: 0,
        userId: 0,
    };*/

    handleClick ()
    {
        let userstr = localStorage.getItem("user");
        let user = JSON.parse(userstr);
        const callback = () =>{

        }
        addOrder(user.userId, callback);
    }
    /*componentDidMount() {
        const callback =  (data) => {
            this.setState({books:data});
        };
        getSingleOrderBook(this.props.bookId, callback);
    }*/
    render() {
        /*let userstr = localStorage.getItem("user");
        let user = JSON.parse(userstr);*/
        return (
            <div>
                {/*<p>{this.props.info.title}</p>*/}
                <Col span={18} offset={3}>
                    <List
                        itemLayout="vertical"
                        pagination={{
                            onChange: page => {
                                console.log(page);
                            },
                            pageSize: 4,
                        }}
                        dataSource={this.props.info}
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
                    <Table columns={columns} dataSource={this.state.info} size="large">
                    </Table>
                </Col>

                <Col offset={10} span={4}>
                    <Link to={{
                        pathname: '/Home'}}
                    >
                        <Button type="submit" icon={<CheckOutlined/>} size={"large"} onClick={this.handleClick.bind(this)}>
                            确认提交订单
                        </Button>
                    </Link>
                </Col>
            </div>

        )
    }
}export default SingleOrderTable;