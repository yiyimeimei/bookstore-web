import React from 'react'
import {Button, Col, Input, Layout, Modal, Row, Statistic, Table, InputNumber} from "antd";
import '../css/searchBar.css'
import {history} from "../utils/history";
import {getUser} from "../services/userService";
import {deleteCart, getAllCartItems, searchCartItems} from "../services/cartService";
import PaymentModal from "./PaymentModal";
import ExpandedBookDetails from "./ExpandedBookDetails";
import {AlipayOutlined, CloseOutlined} from "@ant-design/icons";

const {Footer} = Layout;

class CartList extends React.Component {

    handleCartItemsInfo = data => {
        data.map((cartItem, index) => {
            let book = cartItem.book;
            cartItem.bookId = book.bookId;
            cartItem.available = book.available;
            cartItem.key = index;
            cartItem.state = cartItem.book.available ? '销售中' : '已下架';
            cartItem.title = book.title;
            cartItem.image1 = book.image1;
            cartItem.description = book.description;
            cartItem.author = book.author;
            cartItem.price = book.price;
            cartItem.type = book.type;
        });
        this.setState({
            cartItems: data
        });
    };

    componentDidMount() {
        getAllCartItems(this.handleCartItemsInfo);
    }


    constructor(props) {
        super(props);
        this.state = {
            selectedRowKeys: [], // Check here to configure the default column
            loading: false,
            totalPrice: 0,
            showDeleteModal: false,
            showPaymentModal: false,
            editRowKey: -1,
            orders: [],
            userAddress: '',
            username: '',
            userTel: '',
            userProperty: 0,
        };
    }

    /*expandable={{
    expandedRowRender: (item) => {
    return (
<ExpandedBookDetails
bookCover={item.image1}
bookDescription={item.description}
/>
);
},
rowExpandable: record => record.name !== 'Not Expandable',
}}*/




    onSelectChange = (selectedRowKeys, selectedRows) => {
        this.setState({selectedRowKeys}, () => {
            this.setState({
                totalPrice: this.calcTotalPrice()
            })
        });
    };

    calcTotalPrice = () => {
        let totalPrice = 0;
        this.state.cartItems.map((cartItem, index) => {
            if (this.state.selectedRowKeys.indexOf(index) !== -1) {
                totalPrice += Number(cartItem.price) * Number(cartItem.bookNumber);
            }
        });
        return totalPrice;
    };

    onDeleteClick = () => {
        if (this.state.selectedRowKeys.length)
            this.setState(
                {
                    showDeleteModal: true,
                });
    };

    handleUserInfo = data => {

        this.setState({
            userType: data.userType,
            name: data.name,
            address: data.address,
            tel: data.tel,

            showPaymentModal: true,
        })
    };

    checkOnSale = () => {
        let flag = true;
        this.state.selectedRowKeys.map(key => {
            if (this.state.cartItems[key].available !== 1) {
                flag = false;
            }
        });
        return flag;
    };

    checkInventory = () => {
        let flag = true;

        this.state.selectedRowKeys.map(key => {
            console.log(this.state.cartItems[key]);
            if (this.state.cartItems[key].bookNumber > this.state.cartItems[key].book.inventory) {
                flag = false;
            }
        });
        return flag;
    };

    onPaymentClick = () => {
        if (this.state.selectedRowKeys.length)
        {
            if (this.checkOnSale() && this.checkInventory())
            {
                getUser(this.handleUserInfo);
                return;
            }
            else if(!this.checkOnSale())
            {
                this.setState({
                    showPaymentModal: false,
                });
                Modal.error({
                    title: '购买失败',
                    content: '订单中存在已经下架的书！',
                });
                return;
            }
            else if (!this.checkInventory())
            {
                this.setState({
                    showPaymentModal: false,
                });
                Modal.error({
                    title: '购买失败',
                    content: '订单中存在购买量超过库存的书！',
                });
                return;
            }
        }
        else
        {
            Modal.error({
                title: '购买失败',
                content: '您什么也没买！',
            });
        }
    };

    onDeleteCancel = () => {
        this.setState({
            showDeleteModal: false,
        });
    };

    onDeleteOk = () => {
        this.state.selectedRowKeys.map(key => {
            deleteCart(this.state.cartItems[key].cartId, () => {
            });
        });
        setTimeout(() => {
            history.go(0)
        }, 300);
        this.setState({
            showDeleteModal: false,
        });
    };


    renderDeleteModal = () => {
        if (this.state.showDeleteModal)
            return (
                <Modal title="提示" visible={true} onOk={this.onDeleteOk} onCancel={this.onDeleteCancel} okText={"是"}
                       cancelText={"否"}>
                    <p>是否删除选中的商品？</p>
                </Modal>);
        else return null;
    };

    renderPaymentModal = () => {
        if (this.state.showPaymentModal) {
            let selectedItems = [];
            this.state.selectedRowKeys.map((itemIndex) => {
                selectedItems.push(this.state.cartItems[itemIndex]);
            });
            return (
                <PaymentModal
                    defaultAddress={this.state.address}
                    defaultReceiver={this.state.name}
                    defaultTel={this.state.tel}
/*
                    userProperty={this.state.userProperty}
*/
                    selectedItems={selectedItems}
                />
            )
        } else return null;
    };

    renderFooter = () => {
        return (
            <Footer style={{backgroundColor: 'antiquewhite'}}>
                <Row justify={"end"}>
                    <Col span={2}>
                        <Statistic title="总价" value={this.state.totalPrice} precision={2}/>
                    </Col>
                    <Col span={6}>
                        <Button type="primary" htmlType="submit"
                                onClick={this.onDeleteClick}
                                style={{
                                    backgroundColor: '#2dc2ab',
                                    /*border: '#FB6825 1px solid',*/
                                    height: '50px',
                                    width: '100px'
                                }}>
                            <CloseOutlined />
                            删除
                        </Button>
                    </Col>
                    <Col span={12}>
                        <Button type="primary" htmlType="submit"
                                onClick={this.onPaymentClick}
                                style={{
                                    backgroundColor: '#62e08e',
                                    /*border: 'orange 1px solid',*/
                                    height: '50px',
                                    width: '100px',
                                    margin: "0 20px"
                                }}>
                            <AlipayOutlined />
                            支付
                        </Button>
                    </Col>
                </Row>
            </Footer>
        );
    };

    renderTable = () => {
        const columns = [
            {
                title: '书名',
                dataIndex: 'title',
            },
            {
                title: '单价',
                sorter: {
                    compare: (a, b) => a.bookPrice - b.bookPrice,
                    multiple: 2,
                },
                dataIndex: 'price',

            },
            {
                title: '数量',
                dataIndex: 'bookNumber',
                render: (text, book) => {
                    let onChange = newNum => {
                        book.bookNumber = newNum;
                        if (this.state.selectedRowKeys.indexOf(book.key) !== -1) {
                            this.setState({
                                totalPrice: this.calcTotalPrice()
                            });
                        }
                    };
                    return <InputNumber min={1} defaultValue={text} onChange={onChange}/>
                }
            },
            {
                title: '售卖状态',
                dataIndex: 'state',
            }
        ];

        const {selectedRowKeys} = this.state;
        const rowSelection = {
            selectedRowKeys,
            onChange: this.onSelectChange,
        };
        return (
            <Table columns={columns}
                   dataSource={this.state.cartItems}
                   scroll={{y: 350}}
                   rowSelection={rowSelection}

            />
        );
    };
    render() {
        return (
            <>
                {/*{this.renderSearchBar()}*/}
                {this.renderTable()}
                {this.renderDeleteModal()}
                {this.renderPaymentModal()}
                {this.renderFooter()}
            </>
        );
    }
}

export default CartList;

/*
import React from 'react';
import {List, Button, Col} from 'antd';
import {getCartByCustomerId} from "../services/cartService";
import {Link} from "react-router-dom";



class CartList extends React.Component{


    constructor(props) {
        super(props);
        this.state = {books:[]};
    }
    handleBookInfo = data => {
        this.setState({
                books: [...this.state.books, data],
            }
        )
    };
    /!*handleGetCartProduct = data => {
        this.setState({
            books: [...this.state.books, data],
        });
    };*!/
    componentDidMount() {
        let userstr = localStorage.getItem("user");
        let user = JSON.parse(userstr);
        //this.setState({books:[]}, () =>getCartByCustomerId(user.userId, this.handleGetCartProduct) );
        /!*const callback =  (data) => {
            this.setState({books:data});
            console.log(this.state.books.author);
        };*!/

        getCartByCustomerId(user.userId, this.handleBookInfo);
        /!*console.log(this.state.books.title);*!/
    }

    render(){
        let user1 = JSON.parse(localStorage.getItem("user"));
        return(
            <div>
                <List
                    itemLayout="vertical"
                    size="large"
                    pagination={{
                        onChange: page => {
                            console.log(page);
                        },
                        pageSize: 6,
                    }}
                    dataSource={this.state.books}
                    footer={
                        <div>
                            Your Shopping Cart  ↑↑↑
                        </div>
                    }
                    renderItem={item => (
                        <List.Item
                            key={item.title}
                            actions={[<Button>+</Button> , <Button>-</Button>]}
                            extra={
                                <img
                                    width={180}
                                    alt="bookimage"
                                    src={item.image1}
                                />
                            }
                        >
                            <List.Item.Meta
                                title={<Link to={{
                                    pathname: '/bookDetails',
                                    search: '?id=' + item.bookId}}
                                             target="_blank"
                                >{item.title}</Link>}
                                description={item.description}
                            />
                        </List.Item>
                    )}
                />
                <Col offset={10} span={4}>

                    <Link to={{
                        pathname: '/Order',
                        search: '?userId=' + user1.userId}}
                    >
                        <Button icon="pay-circle" size={"large"} style={{marginLeft:"15%"}} >
                            立即结算
                        </Button>
                    </Link>
                </Col>
            </div>


        )
    }
}
export default CartList;*/
