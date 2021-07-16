import '../css/register.css'
import '../css/login.css'
import '../css/loginPage.css'
import {Link, Redirect} from "react-router-dom";

import React from 'react'

import {Button, Form, Icon, Input, message, Tooltip} from "antd";
import {checkDuplication, register} from "../services/userService";


const tailLayout = {
    wrapperCol: {
        offset: 8,
        span: 16,
    },
};

class RegisterForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            eye_open: true,
            pwdHidden: true,
            username: "",
            password: "",
            duplicate: false,
            phoneValid: false,
            showUserAccountTip: false,
            userAccountTips: '用户名不能为空',
            showPhoneNumberTip: false,
            PhoneNumberTips: '请输入正确的手机号',
            emailTips:'请输入正确的邮箱',
            showEmailTip: false,
        };
    }

    registerResult = data => {
        if (data.status > 0) {
            message.success(data.message);
            this.setState({
                redirect: true,
            })
        } else {
            message.error(data.message);
        }
    };


    handleSubmit = data => {
        data.preventDefault();
        let userInfo = data.target;
        let account = userInfo['user_account'].value;
        let phone = userInfo['user_phone'].value;
        let password1 = userInfo['password1'].value;
        let password2 = userInfo['password2'].value;
        let address = userInfo['user_address'].value;
        let name = userInfo['user_name'].value;
        let email = userInfo['user_email'].value;
        let isEmpty = str => {
            if (str === null || str === undefined || str.length === undefined || str.length === null) {
                return true;
            } else return str.length === 0;
        };
        if (isEmpty(account) || isEmpty(name) || isEmpty(phone) || isEmpty(address) || isEmpty(password1) || isEmpty(password2) || isEmpty(email))
        {
            message.warn("信息未全部填写完成");
            return;
        }
        if (password1 !== password2)
        {
            message.warn("请确认两次输入的密码相同");
            return;
        }
        if (this.state.duplicate || !this.state.phoneValid || !this.state.emailValid)
        {
            message.warn("请按照提示修改您的注册信息");
            return;
        }
        let newUser =
        {
            userAccount: account,
            userPhone:phone,
            userName: name,
            userPassword: password1,
            userAddress:address,
            userEmail:email,
        };
        register(newUser, this.registerResult)
    };




    onUserAccountChange = e => {
        let userAccout = e.target.value;
        checkDuplication(userAccout, this.handleCheckResponse);
    };


    handleCheckResponse = res => {
        console.log(res);
        if (res)
            this.setState({
                showUserAccountTip: true,
                duplicate: true,
                userAccountTips: '当前用户名已经被使用,请更换用户名。',
            });
        else
            this.setState({
                duplicate: false,
                showUserAccountTip: false,
            })
    };


    onPhoneNumberChange = e => {
        let phone = e.target.value;
        let valid = /^1[3-9]\d{9}$/.test(phone);
        this.setState({
            phoneValid: valid,
            showPhoneNumberTip: !valid,
        })
    };

    onEmailChange = e => {
        let email = e.target.value;
        let valid = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+(\.([a-zA-Z]{2,4}))+$/.test(email);
        this.setState({
            emailValid: valid,
            showEmailTip: !valid,
        })
    };

    render() {
        return (
            <Form onSubmit={this.handleSubmit} className="login-form">
                <Form.Item>
                    <Tooltip title={this.state.userAccountTips} color={'volcano'}
                             visible={this.state.showUserAccountTip}
                             trigger='focus'
                             mouseEnterDelay={2}>
                        <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                               type="text" name="user_account"
                               id={"user_account"}
                               placeholder="请输入用户名" autoFocus="autofocus" autoComplete="on"
                               onChange={this.onUserAccountChange}/>
                    </Tooltip>
                </Form.Item>
                {/*<Form.Item>
                    <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                           className="register-info-input username" type="text" name="user-name" id={"username"}
                           placeholder="请输入用户名." autoFocus="autofocus" autoComplete="on"
                    />
                </Form.Item>*/}
                {/*<Form.Item>
                    <Tooltip title={this.state.emailTips} color={'volcano'}
                             visible={this.state.showEmailTip}
                             trigger='focus'>
                        <Input className="register-info-input email" type="text" name="email" id={"email"}
                               placeholder="请输入邮箱" autoFocus="autofocus" autoComplete="on"
                               onChange={this.onEmailChange}
                        />
                    </Tooltip>
                </Form.Item>*/}
                <Form.Item>
                    <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                           type={this.state.pwdHidden ? "password" : "text"}
                           name="user-password"
                           id={"password1"}
                           placeholder="请输入密码" autoComplete="on" defaultValue={""}/>
                    {/*{this.renderEye()}*/}
                </Form.Item>
                <Form.Item>
                    <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                           type={this.state.pwdHidden ? "password" : "text"}
                           name="user-password"
                           id={"password2"}
                           placeholder="请重复输入密码" autoComplete="on" defaultValue={""}/>
                    {/*{this.renderEye()}*/}
                </Form.Item>

                <Form.Item>
                    <Input prefix={<Icon type="solution" style={{ color: 'rgba(0,0,0,.25)' }} />}
                           type="text"
                           name="user-name"
                           id={"user_name"}
                           placeholder="请输入姓名" autoComplete="on" defaultValue={""}/>
                </Form.Item>

                <Form.Item>
                <Tooltip title={this.state.PhoneNumberTips} color={'volcano'}
                         visible={this.state.showPhoneNumberTip}
                         trigger='focus' mouseEnterDelay={1.5}  mouseLeaveDelay={1.5}>
                    <Input prefix={<Icon type="phone" style={{ color: 'rgba(0,0,0,.25)' }} />}
                           type="text"
                           name="user-phone"
                           id={"user_phone"}
                           placeholder="请输入手机号" autoComplete="on" defaultValue={""}
                           onChange={this.onPhoneNumberChange}/>
                </Tooltip>

            </Form.Item>
                <Form.Item>
                    <Tooltip title={this.state.emailTips} color={'volcano'}
                             visible={this.state.showEmailTip}
                             trigger='focus' mouseEnterDelay={1.5}  mouseLeaveDelay={1.5}>
                        <Input prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
                               type="text"
                               name="user-email"
                               id={"user_email"}
                               placeholder="请输入邮箱" autoComplete="on" defaultValue={""}
                               onChange={this.onEmailChange}/>
                    </Tooltip>

                </Form.Item>

                <Form.Item>
                    <Input prefix={<Icon type="home" style={{ color: 'rgba(0,0,0,.25)' }} />}
                           type="text"
                           name="user-address"
                           id={"user_address"}
                           placeholder="请输入地址" autoComplete="on" defaultValue={""}/>
                </Form.Item>


                <Form.Item {...tailLayout}>
                    {/*<input type="submit" className="register-info-input" id={"register-submit"} name="submit"
                           value={"Register"}
                           style={{outline: 'orange', cursor: 'pointer', color: 'black', fontSize: '18px'}}>
                    </input>*/}
                    <Button type="primary" htmlType="submit">
                        确认注册
                    </Button>
                </Form.Item>
                <Form.Item {...tailLayout}>
                    <Link to={"/login"} >返回登录页面</Link>
                    {this.state.redirect ? <Redirect exact to={"/login"}/> : null}
                </Form.Item>
            </Form>

        );
    }
}

export default RegisterForm;