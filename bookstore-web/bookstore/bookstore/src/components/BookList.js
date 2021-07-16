import React from 'react';
import {Col, List, Row} from 'antd'
import {getBooks, getBooksByKeyword} from "../services/bookService";
import DisplayCard from "./DisplayCard";
import Search from "antd/es/input/Search";
export class BookList extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            books: []
        };
    }

    componentDidMount() {
        const callback =  (data) => {
           this.setState({books:data});
        };
        getBooks(callback);
    }

    renderSearchBar = () => {
        return (
            <Row align={"center"}>
                <Col offset={6} span={12} style={{margin: '20px'}}>
                    <Search
                        placeholder="请输入检索词"
                        allowClear
                        enterButton="查找"
                        size="large"
                        onSearch={this.onSearch}
                    />
                </Col>
            </Row>
        );
    };

    onSearch = (value) => {
        let keyword = value.toLowerCase();
        getBooksByKeyword(keyword, this.handleSearchResults);
    };

    handleSearchResults = books => {
        /*this.preHandleBooks(books);*/
        this.setState({
            books: books,
        });
    };

    render() {
        return (
        <List
            size="large"
            grid={{gutter: 10, column: 3}}
            dataSource={this.state.books}
            header={this.renderSearchBar()}
            pagination={{
                onChange: page => {
                    console.log(page);
                },
                pageSize: 6,

            }}
            itemLayout="horizontal"
            renderItem={item => (
                <List.Item>
                    <DisplayCard info={item} />
                </List.Item>
            )}
        />
        );
    }

}