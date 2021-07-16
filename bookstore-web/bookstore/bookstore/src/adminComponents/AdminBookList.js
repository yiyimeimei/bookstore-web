import React from 'react'
import {Col, Select, message, Row, Table} from "antd";
import {deleteBooks, getBooks, getBooksByKeyword, putOnSale, undercarriageBooks} from "../services/bookService";

import Button from "antd/es/button";
import {history} from "../utils/history";
import Search from "antd/es/input/Search";
import EditableTableItem from "./EditableTableItem";
import BookModifyModal from "./BookModifyModal";
import BookUpload from "./BookUploadButton";
import {CheckOutlined, CloseOutlined, SearchOutlined, StopOutlined} from "@ant-design/icons";

const {Option} = Select;

class AdminBookList extends React.Component {

    static viewMode = 0;
    static formMode = 1;

    constructor(props) {
        super(props);
        this.state = {
            books: [],
            addedBooks: [],
            mode: AdminBookList.viewMode,
            showModal: false,
            bookToModify: null,
        }
    }

    onSearch = (value) => {
        let keyword = value.toLowerCase();
        getBooksByKeyword(keyword, this.handleSearchResults);
    };

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

    preHandleBooks = books => {
        books.map((book, index) => {
            book.key = index;
            book.state = book.available ? '火爆销售中' : '已下架';
        });
    };

    handleSearchResults = books => {
        this.preHandleBooks(books);
        this.setState({
            books: books,
        });
    };

    handleBooks = books => {
        this.preHandleBooks(books);
        this.setState({
            books: books,
            selectedRowKeys: [], // Check here to configure the default column
            editRowKey: -1,
        })
    };

    onSelectChange = (selectedRowKeys, selectedRows) => {
        this.setState({selectedRowKeys});
    };

    componentDidMount() {
        getBooks(this.handleBooks)
    }

    handleDeleteBooks = () => {
        let bookIdList = [];
        let selectedRowKeys = this.state.selectedRowKeys;
        selectedRowKeys.map((key) => {
            bookIdList.push(this.state.books[key].bookId);
        });
        deleteBooks(bookIdList, msg => {
            if (msg.status > 0)
                message.success(msg.message);
            else
                message.warn(msg.message);
        });
        setTimeout(() => {
            history.go(0);
        }, 500);
    };

    handlePutOnSale = () => {
        let bookIdList = [];
        let selectedRowKeys = this.state.selectedRowKeys;
        selectedRowKeys.map((key) => {
            bookIdList.push(this.state.books[key].bookId);
        });
        putOnSale(bookIdList, msg => {
            if (msg.status > 0)
                message.success(msg.message);
            else
                message.warn(msg.message);
        });
        setTimeout(() => {
            history.go(0);
        }, 500);
    };

    toggleMode = () => {
        this.setState({
            selectedRowKeys: [],
            mode: (this.state.mode + 1) % 2,
        })
    };

    handleUndercarriageBooks = () => {
        let bookIdList = [];
        let selectedRowKeys = this.state.selectedRowKeys;
        selectedRowKeys.map((key) => {
            bookIdList.push(this.state.books[key].bookId);
        });
        console.log(bookIdList);
        undercarriageBooks(bookIdList, msg => {
            if (msg.status > 0)
                message.success(msg.message);
            else
                message.warn(msg.message);
        });
        setTimeout(() => {
            history.go(0);
        }, 500);
    };

    addOne = () => {
        let emptyItem = {
            isbn: '',
            title: '',
            author: '',
            type: '',
            price: '',
            description: '',
            inventory: '',
            sales: '',
            image1: '',
            image2: '',
            available: 1,
            key: this.state.addedBooks.length ? this.state.addedBooks[this.state.addedBooks.length - 1].key + 1 : 0,
        };
        this.setState({
            addedBooks: [...this.state.addedBooks, emptyItem],
        })
    };

    handleDeleteFormBooks = () => {
        console.log(this.state.selectedRowKeys);
        let filter = this.state.addedBooks.filter(book => {
            if (this.state.selectedRowKeys.indexOf(book.key) === -1) {
                return true;
            }
        });
        this.setState({
            addedBooks: filter,
            selectedRowKeys: []
        })
    };


    setter = (target, object, value) => {
        switch (object) {
            case "title":
                target.title = value;
                break;
            case "price":
                target.price = value;
                break;
            case "inventory":
                target.inventory = value;
                break;
            case "description":
                target.description = value;
                break;
            case "author":
                target.author = value;
                break;
            case "type":
                target.type = value;
                break;
            case "available":
                target.available = value;
                break;
            case "isbn":
                target.isbn = value;
                break;
            case "sales":
                target.sales = value;
                break;
            case "image1":
                target.image1 = value;
                break;
            case "image2":
                target.image2 = value;
                break;
            default:
                break;
        }
    };

    onSelectState = (book, value) => {
        book.available = value === '是';
    };

    showModifyModal = (bookToModify, e) => {
        e.preventDefault();
        this.setState({
            showModal: true,
            bookToModify: bookToModify,
        })
    };

    closeModal = () => {
        this.setState({
            showModal: false,
        })
    };

    renderModal = (bookToModify) => {
        if (this.state.showModal === false) return null;
        else return <BookModifyModal closeFunc={this.closeModal} bookToModify={bookToModify}/>
    };

    renderTable = () => {
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
                    title: '作者',
                    dataIndex: 'author',
                },
                {
                    title: 'isbn',
                    dataIndex: 'isbn',
                },
                {
                    title: '库存',
                    dataIndex: 'inventory',
                },

                {
                    title: '售卖状态',
                    dataIndex: 'state'
                },
                {
                    title: '编辑书籍信息',
                    dataIndex: 'modify',
                    render: (_, book) => (
                        <a onClick={this.showModifyModal.bind(this, book)}>编辑</a>
                    ),
                }
            ];
            const {selectedRowKeys} = this.state;
            const rowSelection = {
                selectedRowKeys,
                onChange: this.onSelectChange,
            };
            return (
                <div>
                    <Col>
                        <BookUpload >上传书籍信息</BookUpload>
                    </Col>
                    {this.renderSearchBar()}
                    <Table columns={columns}
                           rowSelection={rowSelection}
                           dataSource={this.state.books}
                           footer={
                               () =>
                                   <Row>

                                       <Col>
                                           <Button onClick={this.handlePutOnSale} type="ghost" >
                                               <CheckOutlined />
                                               美美开售
                                           </Button>
                                       </Col>
                                       <br/>
                                       <Col>
                                           <Button onClick={this.handleUndercarriageBooks} type="ghost"  >
                                               <StopOutlined />
                                               狠狠下架
                                           </Button>
                                       </Col>
                                       <br/>
                                       <Col>
                                           <Button onClick={this.handleDeleteBooks} type="danger"  icon={<CloseOutlined />}>
                                               <CloseOutlined />
                                               删除
                                           </Button>
                                       </Col>
                                   </Row>}
                    />


                    {this.renderModal(this.state.bookToModify)}
                </div>
            );


    };

    render() {
        return (
            <>
                {this.renderTable()}
            </>
        )
    }
};

export default AdminBookList;