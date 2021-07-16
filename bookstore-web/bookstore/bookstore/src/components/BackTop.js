import {BackTop} from 'antd';
import React from 'react';
import '../css/homePage.css'

const myBackTopButton = {
    height: 40,
    width: 40,
    lineHeight: '40px',
    borderRadius: 4,
    backgroundColor: '#1088e9',
    color: '#fff',
    textAlign: 'center',
    fontSize: 14,
};


class BackTopButton extends React.Component {
    render() {
        return (
            <div style={{height: '10vh', padding: 8}}>
                <BackTop visibilityHeight={0}>
                    <div style={myBackTopButton}>UP</div>
                </BackTop>
            </div>

        )
    }

}

export default BackTopButton;