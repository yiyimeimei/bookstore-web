import React, {useCallback} from 'react';
import { Descriptions, Button, Alert } from 'antd';
import {PayCircleOutlined, ShoppingCartOutlined} from "@ant-design/icons";
import '../css/bookDetail-mine.css'
import { addToCart} from "../services/cartService";
import {Link} from "react-router-dom";



export class BookDetail extends React.Component{

    handleAdd = (bookId) =>{
        addToCart(bookId, () => {});
    }
    /*renderAddCartButton = (info) => {
        if(info.available === true)
        {
            return(
                <Button  icon="shopping-cart" size={"large"} onClick={this.handleAdd.bind(this, info.bookId)}>
                    加入购物车
                </Button>
            )
        }
        else
        {
            return(
                <Button  icon="shopping-cart" size={"large"} onClick={this.handleAdd.bind(this, info.bookId)} disabled={true}>
                    加入购物车
                </Button>
            )
        }
    }*/

    renderBuyButton = (info) => {
        console.log(info.available);
        if(info.available === 1)
        {
            return(
                <Link to={{
                    pathname: '/SingleOrder',
                    search: '?id=' + info.bookId}}
                >
                    <Button type="danger" icon="pay-circle" size={"large"} style={{marginLeft:"15%"}}>
                        立即购买
                    </Button>
                </Link>
            )
        }
        else
        {
            return(
                <Link to={{
                    pathname: '/SingleOrder',
                    search: '?id=' + info.bookId}}
                >
                    <Button type="danger" icon="pay-circle" size={"large"} style={{marginLeft:"15%"}} disabled={true}>
                        立即购买
                    </Button>
                </Link>
            )
        }
    }



    render() {
        let userstr = localStorage.getItem("user");
        let user = JSON.parse(userstr);
        const {info} = this.props;
        if(info == null){
            return null;
        }

        return (
            <div className={"content"}>
                    <div className="book-detail">
                        <div className="book-image"><img alt={info.info} src={info.image2}
                                                         style={{width: "430px", height: "430px"}}/></div>
                        <div className="descriptions">
                            <Descriptions>
                                <Descriptions.Item className={"title"} span={3}>正版现货
                                    包邮 {info.title} 新星出版社</Descriptions.Item>
                                <Descriptions.Item label={"作者"} span={3}>{info.author}</Descriptions.Item>
                                <Descriptions.Item label={"ISBN"} span={3}>{info.isbn}</Descriptions.Item>
                                <Descriptions.Item label={"分类"} span={3}>{info.type}</Descriptions.Item>
                                <Descriptions.Item label={"月销量"} span={3}>{info.sales}</Descriptions.Item>
                                <Descriptions.Item label={"劲爆活动价"} span={3}>{<span className={"price2"}>{'¥' + info.price}</span>}</Descriptions.Item>
                                <Descriptions.Item label={"库存"} span={3}>{info.inventory}</Descriptions.Item>
                                <Descriptions.Item label={"状态"} span={3}>{info.available !== 0 ?
                                    <span className={"status1"}>火爆售卖中</span> :
                                    <span className={"status2"}>已下架</span>}</Descriptions.Item>
                            </Descriptions>
                        </div>

                    </div>
                    <br/>
                <div className={"button-groups"}>
                    <Button  icon="shopping-cart" size={"large"} onClick={this.handleAdd.bind(this, info.bookId)}>
                        加入购物车
                    </Button>
                    {/*{this.renderBuyButton(info)}*/}
                </div>
            </div>


        )

    }

}
