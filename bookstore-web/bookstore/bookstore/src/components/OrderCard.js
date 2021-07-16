import React from 'react'
import {Card, Col, Row, Table} from 'antd';
import 'antd/dist/antd.css';
import '../css/bootstrap-3.3.7-dist/css/bootstrap.css';
import Button from "antd/es/button";
import {CheckOutlined, CloseOutlined, StopOutlined} from "@ant-design/icons";

const {Meta} = Card;
const columns = [
    {
        title: '封面',
        dataIndex: 'cover',
        render: (cover) =>
            <img src={cover} width="120px" alt=""/>
    },
    {
        title: '书名',
        dataIndex: 'title',
    },
    {
        title: '单价',
        dataIndex: 'price',
    },
    {
        title: '数量',
        dataIndex: 'bookNumber',
    },
    {
        title: '小计',
        dataIndex: 'sumPrice',
    },
];
class OrderCard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            info: null,
            books: [],
        }
    }

    /*preHandleOrderItems = info => {
        console.log("info");
        console.log(info);
        if(info === null)
            return null;
        let bookList = [];
        info.orders.map((dataItem, index) => {
            console.log("dataItem");
            console.log(dataItem);
                let b = dataItem.book;
            console.log(b);
                let item = {
                    cover: b.image1,
                    title: b.title,
                    price: b.price,
                    bookNumber: dataItem.bookNumber,
                    sumPrice: (dataItem.bookNumber * b.price),
                    key: bookList.length,
                };
                bookList.push(item);
        });
        this.setState({
            books: bookList,
        });
        console.log("this.state.books");
        console.log(this.state.books);
    };*/

    /*calculatePrice = () => {
        let sum = 0;
        for(let i = 0 ;i < this.state.books.length; ++i)
        {
            sum += this.state.books[i].sumPrice;
        }
        return sum;
    }*/
    preHandleOrderItems = info => {
        console.log("info");
        console.log(info);
        if(info === null)
            return null;
        let bookList = [];
        info.orders.map((dataItem, index) => {
            console.log("dataItem");
            console.log(dataItem);
            let b = dataItem.book;
            console.log(b);
            let item = {
                cover: b.image1,
                title: b.title,
                price: b.price,
                bookNumber: dataItem.bookNumber,
                sumPrice: (dataItem.bookNumber * b.price),
                key: bookList.length,
            };
            bookList.push(item);
        });
        return bookList;
/*        console.log("this.state.books");
        console.log(this.state.books);*/
    };
    calculatePrice = (books) => {
        let sum = 0;
        for(let i = 0 ;i < books.length; ++i)
        {
            sum += books[i].sumPrice;
        }
        return sum;
    }


    componentDidMount() {
        /*this.preHandleOrderItems(this.props.info);*/
    }



    renderBookTable = () =>
    {
        this.preHandleOrderItems(this.props.info);
        return (
                <Table
                    columns={columns}
                    dataSource={this.state.books}
                    footer={ () =>
                        <h4>总价：{this.calculatePrice()}元</h4>
                    }
                />
        )
    }

    render() {
        const info = this.props.info;
        /*console.log(info);
        console.log("this.state.books");
        console.log(this.state.books);*/
        let books = this.preHandleOrderItems(info);
        return(
            <Card
                style={{width: 1000}}
            >
                <h4>订单号：{info.orderId}</h4>
                <h4>下单时间：{info.orderDate}</h4>
                <h4>收货人：{info.orderReceiver}</h4>
                <h4>联系电话：{info.orderTel}</h4>
                <h4>收货地址：{info.orderAddress}</h4>
                <Table
                    columns={columns}
                    dataSource={books}
                    pagination={4}
                    footer={ () =>
                        <h4>总价：{this.calculatePrice(books)}元</h4>
                    }
                />
            </Card>
        )
    }
};
export default OrderCard;