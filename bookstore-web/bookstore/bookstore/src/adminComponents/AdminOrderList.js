import React from 'react'
import {Col, Button, Row, Table, DatePicker, List} from "antd";
import {
    getAllOrdersForManager,
    searchOrdersForManager,
    searchOrdersByKeywordForManager
} from "../services/orderService";
import Search from "antd/es/input/Search";
import OrderCard from "../components/OrderCard";
import BackTop from "../components/BackTop";

const {RangePicker} = DatePicker;



class AdminOrderList extends React.Component {
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

    onSearch = () => {
        if(this.state.time !== null)
            searchOrdersForManager(this.state.time, this.handleSearchOrders);
    };

    handleSearchOrders = data => {
        this.setState({
            orders: data,
            time:null,
        });
    };

    onKeywordSearch = (value) => {
        let keyword = value.toLowerCase();
        searchOrdersByKeywordForManager(keyword, this.handleKeywordSearchResults);
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
        getAllOrdersForManager(this.handleAllOrders);
    }

    renderTimeSearchBar = () =>{
        return(
            <Row>
                <Col offset={6} span={10}>
                    <RangePicker onChange={this.onRangeChange} showToday/>
                </Col>
                <Col>
                    <Button onClick={this.onSearch} type={"primary"}>时间查询</Button>
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
                <Col>
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
                        {/*<Pagination style={{height: '32px', lineHeight: '32px', textAlign: 'center'}}
                                    pageSize={1}
                                    defaultCurrent={1}
                                    total={this.state.orders.length}
                        >

                        </Pagination>*/}
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

export default AdminOrderList;