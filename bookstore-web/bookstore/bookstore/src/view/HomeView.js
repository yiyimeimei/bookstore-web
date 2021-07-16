import React from 'react';
import {Layout, Carousel, Col, Row} from 'antd'
import {HeaderInfo} from "../components/HeaderInfo";
import {SideBar} from "../components/SideBar";
import '../css/home.css'
import {withRouter} from "react-router-dom";
import {BookCarousel} from "../components/BookCarousel";
import {SearchBar} from "../components/SearchBar";
import {BookList} from "../components/BookList";
import Footer from "../components/Footer";
import BackTopButton from "../components/BackTop";
import SideNavbar from "../components/SideNavbar";

const { Header, Content} = Layout;

class HomeView extends React.Component{

    constructor(props) {
        super(props);
    }

    componentDidMount(){
        let user = localStorage.getItem("user");
        this.setState({user:user});
    }

    render(){
        return(
            /*<div>
                <br/>
                {/!*<Col span={4} offset={10}>
                    <SearchBar dataSource={bookData}/>
                    <SelectWithHiddenSelectedOptions/>
                </Col>*!/}
                <Row>
                    <Col>
                        <HeaderInfo/>
                    </Col>
                </Row>
                <br/>
                <Row>
                    <Col span={20} offset={2}>
                        <BookCarousel/>
                    </Col>
                </Row>
                <br/>
                <Col span={12} offset={6}>
                    <BookList/>
                </Col>
                <BackTopButton/>
                <Footer/>
            </div>*/
            <div>
                <Layout className="layout">

                <Header>
                    <HeaderInfo />
                </Header>
                    <br/>
                <Layout>
                    <Content style={{ padding: '0 50px' }}>
                        <div className="home-content">
                            <BookCarousel />
                            <BookList />
                        </div>
                    </Content>
                </Layout>

                </Layout>
                <BackTopButton/>
                <Footer/>
            </div>
        );
    }
}

export default withRouter(HomeView);