import React from 'react'
import {Col, Button, Row, Table, DatePicker, Tabs} from "antd";
import {
    getBooksRankedBySales,
    getBooksRankedBySalesByTime,
    getConsumption,
    getConsumptionByTime
} from "../services/bookService";
import {getUsersRankedByConsumption, getUsersRankedByConsumptionByTime} from "../services/userService";

const {RangePicker} = DatePicker;

class MyConsumptionList extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
            books: [],
            time: null,
        }
    }

    componentDidMount() {
        getConsumption(this.handleBooks);
    }
    /*preHandleBooks = books => {
        books.map((book, index) => {
            book.key = index;
            book.state = book.available ? '火爆销售中' : '已下架';
        });
    };*/
    onBookRangeChange = (date, startNEndDates) => {
        this.setState({
            time: startNEndDates,
        });
    };

    handleBooks = data => {
        this.setState({
            books: data,
            time: null,
        })
    };

    onBookTimeSearch = () => {
        if(this.state.time !== null)
            getConsumptionByTime(this.state.time, this.handleBooks);
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
    calculateTotalPrice = (books) => {
        let sum = 0;
        for(let i = 0 ;i < books.length; ++i)
        {
            sum += books[i].price * books[i].sales;
        }
        return sum;
    }

    calculateBookNumber = (books) => {
        let sum = 0;
        for(let i = 0 ;i < books.length; ++i)
        {
            sum += books[i].sales;
        }
        return sum;
    }
    renderFooter = () =>
    {
        return(
            <>
                <h4>
                    一共购买了{this.calculateBookNumber(this.state.books)}本书
                </h4>
                <h4>
                    一共消费了{this.calculateTotalPrice(this.state.books)}元
                </h4>

            </>
        )
    }


    renderBooks = () => {
        const columns = [
            {
                title: '封面',
                dataIndex: 'image1',
                render: (image1) =>
                    <img src={image1} width="120px" alt=""/>
            },
            {
                title: '书名',
                dataIndex: 'title',
            },
            {
                title: '价格',
                dataIndex: 'price',
            },
            {
                title: '购买量',
                dataIndex: 'sales',
            },
        ];
        return (
            <Table columns={columns}
                   dataSource={this.state.books}
                   footer={this.renderFooter}
            />
        );
    };


    render() {
        return(
            <Col offset={4}>
                <h3>购书信息统计</h3>
                {this.renderBookTimeSearchBar()}
                <br/>
                {this.renderBooks()}
            </Col>
        )
    }

}
export default MyConsumptionList;