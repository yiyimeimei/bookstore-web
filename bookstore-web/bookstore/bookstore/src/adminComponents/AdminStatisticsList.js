import React from 'react'
import {Col, Button, Row, Table, DatePicker, Tabs} from "antd";
import {getBooksRankedBySales, getBooksRankedBySalesByTime} from "../services/bookService";
import {getUsersRankedByConsumption, getUsersRankedByConsumptionByTime} from "../services/userService";

const {RangePicker} = DatePicker;

class AdminStatisticsList extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
            rankedBooks: [],
            rankedUsers: [],
            time1: null,
            time2: null,
        }
    }

    componentDidMount() {
        getBooksRankedBySales(this.handleBooks);
        getUsersRankedByConsumption(this.handleUsers);
    }
    /*preHandleBooks = books => {
        books.map((book, index) => {
            book.key = index;
            book.state = book.available ? '火爆销售中' : '已下架';
        });
    };*/
    onBookRangeChange = (date, startNEndDates) => {
        this.setState({
            time1: startNEndDates,
        });
    };

    onUserRangeChange = (date, startNEndDates) => {
        this.setState({
            time2: startNEndDates,
        });
    };

    handleBooks = data => {
        console.log("book data");
        console.log(data);
        this.setState({
            rankedBooks: data,
            time1: null,
        })
    };

    handleUsers = data => {
        console.log("user data");
        console.log(data);
        this.setState({
            rankedUsers: data,
            time2: null,
        })
    };


    onBookTimeSearch = () => {
        if(this.state.time1 !== null)
            getBooksRankedBySalesByTime(this.state.time1, this.handleBooks);
    };

    onUserTimeSearch = () => {
        if(this.state.time2 !== null)
            getUsersRankedByConsumptionByTime(this.state.time2, this.handleUsers);
    };

    renderBookTimeSearchBar = () =>{
        return(
            <Row>
                <Col offset={6} span={10}>
                    <RangePicker onChange={this.onBookRangeChange} showToday/>
                </Col>
                <Col>
                    <Button onClick={this.onBookTimeSearch} type={"primary"}>按日期查询</Button>
                </Col>
            </Row>
        )
    }

    renderUserTimeSearchBar = () =>{
        return(
            <Row>
                <Col offset={6} span={10}>
                    <RangePicker onChange={this.onUserRangeChange} showToday/>
                </Col>
                <Col>
                    <Button onClick={this.onUserTimeSearch} type={"primary"}>按日期查询</Button>
                </Col>
            </Row>
        )
    }

    renderBooksRankedBySales = () => {
        const columns = [
            {
                title: '封面',
                dataIndex: 'image1',
                render: (image1) =>
                    <img src={image1} width="120px" alt=""/>
            },
            {
                title: '销量',
                dataIndex: 'sales',
            },
            {
                title: '库存',
                dataIndex: 'inventory',
            },
            {
                title: '书名',
                dataIndex: 'title',
            },
            {
                title: '价格',
                dataIndex: 'price',
            },
        ];
        return (
            <Table columns={columns}
                   dataSource={this.state.rankedBooks}
            />
        );
    };


    renderUsersRankedBySales = () => {
        const columns = [
            /*{
                title: '封面',
                dataIndex: 'image1',
                render: (image1) =>
                    <img src={image1} width="120px" alt=""/>
            },*/
            {
                title: '用户名',
                dataIndex: 'name',
            },
            {
                title: '总消费金额',
                dataIndex: 'consumption',
            },

        ];
        return (
            <Table columns={columns}
                   dataSource={this.state.rankedUsers}
            />
        );
    };


    render() {
        return(
            <>
                <Tabs defaultActiveKey="1" /*onChange={}*/>
                    <Tabs.TabPane tab="书籍热销榜" key="1">
                        {this.renderBookTimeSearchBar()}
                        {this.renderBooksRankedBySales()}
                    </Tabs.TabPane>
                    <Tabs.TabPane tab="用户消费榜" key="2">
                        {this.renderUserTimeSearchBar()}
                        {this.renderUsersRankedBySales()}
                    </Tabs.TabPane>
                </Tabs>
            </>
        )
    }

}
export default AdminStatisticsList;