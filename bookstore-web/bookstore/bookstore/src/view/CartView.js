import React from 'react';
import {Layout, Col} from 'antd'
import {HeaderInfo} from "../components/HeaderInfo";
import {withRouter} from "react-router-dom";


import {getBook} from "../services/bookService";
import {BookDetail} from "../components/BookDetail";
import CartList from "../components/CartList";
import Footer from "../components/Footer";

class CartView extends React.Component{

    constructor(props) {
        super(props);
        this.state = {books:null};
    }

    /*componentDidMount(){
        let user = localStorage.getItem("user");
        this.setState({user:user});

        const query = this.props.location.search;
        const arr = query.split('&');
        const bookId = arr[0].substr(4);
        getBook(bookId, (data) => {this.setState({bookInfo: data})})
    }*/

    render(){
        return(
            <div>
                <HeaderInfo/>
                <br/>
                <Layout >
                    <Col offset={4} span={16}>
                        <CartList/>
                    </Col>
                </Layout>


            </div>
        );
    }
}

export default withRouter(CartView);