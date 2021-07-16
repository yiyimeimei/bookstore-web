import React from 'react'
import {Button, Col, Row, DatePicker, List} from 'antd';
import {getAllOrders, searchOrders, searchOrdersByKeyword} from "../services/orderService";
import OrderCard from "./OrderCard";
import Search from "antd/es/input/Search";
import BackTop from "./BackTop";

const {RangePicker} = DatePicker;

class MyOrderList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            orders: [],
            time: null,
        }
    }

    onRangeChange = (date, startNEndDates) => {

        this.setState({
            time: startNEndDates,
        });
    };
    /*preHandleOrders = orders => {
        let itemList = [];
        orders.map((dataItem, index) => {
            dataItem.orders.map(order => {
                let book = order.book;
                let item = {
                    orderReceiver: dataItem.orderReceiver,
                    orderTel: dataItem.orderTel,
                    orderAddress: dataItem.orderAddress,
                    orderDate: dataItem.orderDate,
                    orderId: dataItem.orderId,
                    book: book,
                    key: itemList.length
                };
                itemList.push(item);
            });
        });
        this.setState({
            orders: itemList,
        });
    };*/
    onSearch = () => {
        console.log(this.state.time);
        if(this.state.time !== null)
            searchOrders(this.state.time, this.handleSearchOrders);
    };

    handleSearchOrders = data => {
        console.log(data);
        this.setState({
            orders: data,
        });
    };

    onKeywordSearch = (value) => {
        let keyword = value.toLowerCase();
        searchOrdersByKeyword(keyword, this.handleKeywordSearchResults);
    };

    handleKeywordSearchResults = data => {
        console.log(data);
        this.setState({
            orders: data,
        });
    };

    handleAllOrders = data => {
        console.log(data);
        this.setState({
            orders: data,
        });
    };

    componentDidMount() {
        getAllOrders(this.handleAllOrders);
    }

    renderTimeSearchBar = () =>{
        return(
            <Row>
                <Col offset={6} span={10}>
                    <RangePicker onChange={this.onRangeChange} showToday/>
                    <Button onClick={this.onSearch} type={"primary"}>按日期查询</Button>
                </Col>
            </Row>
        )
    }

    renderKeywordSearchBar = () =>{
        return(
            <Row>
                <Col offset={6} span={10}>
                    <Search
                        placeholder="请输入检索词"
                        allowClear
                        enterButton="关键字查询"
                        size="large"
                        onSearch={this.onKeywordSearch}
                    />
                </Col>
            </Row>
        )
    }

    renderList = () => {
        const paginationProps = {
            showSizeChanger: true,
            showQuickJumper: true,
            pageSize: 4,
            total: this.state.orders.length,
        };
        return (
            <div>
                <Col offset={4} span={16}>
                    <List
                        size="large"
                        grid={{column: 1}}
                        dataSource={this.state.orders}
                        itemLayout="horizontal"
                        pagination={paginationProps}
                        renderItem={item => (
                            <List.Item>
                                <OrderCard info={item}/>
                            </List.Item>
                        )}
                    >
                    </List>


                </Col>
            </div>
        );
    };

    render() {
        return (
            <>
                {this.renderTimeSearchBar()}
                <br/>
                {this.renderKeywordSearchBar()}
                <br/>
                {this.renderList()}
                <BackTop />
            </>
        )
    }
}

export default MyOrderList;