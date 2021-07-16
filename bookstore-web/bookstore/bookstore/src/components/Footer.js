import React from 'react';
import 'antd/dist/antd.css';
import '../css/bootstrap-3.3.7-dist/css/bootstrap.css';
import '../css/homePage.css'
import {Row, Col, BackTop} from "antd";

class Footer extends React.Component {
    render() {
        return (
            <div>
                <Row>
                    <Col flex="auto">
                        <div id="footer">
                            <p>Made by @MinBao</p>
                        </div>
                        {/*<div id="foot2">
                            <p>Made by @MinBao</p>
                        </div>*/}
                    </Col>
                </Row>
            </div>


        );
    }
}


export default Footer;