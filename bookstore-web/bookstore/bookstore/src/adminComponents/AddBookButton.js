import React, { useState } from 'react';
import {Button, Modal, Form, Input, Radio, Icon, Checkbox} from 'antd';
import * as userService from "../services/userService";
import '../css/loginPage.css'

const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};
const tailLayout = {
    wrapperCol: {
        offset: 8,
        span: 16,
    },
};
class AddBookButton extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
            personalInfo: {},
            modalVisible: false,
        }
    }
    showModal = () => {
        this.setState({
            modalVisible: true,
        });
    };

    hideModal = () => {
        this.setState({
            modalVisible: false,
        });
    };



    modalOnClicked = () =>{
        this.hideModal();
    };
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                userService.login(values);
            }
        });
        this.hideModal();
    };


    render()
    {
        const { getFieldDecorator } = this.props.form;
        return(
          <>
              <Modal
                  visible={this.state.modalVisible}
                  title="Add a new book"
                  okText="提交"
                  cancelText="取消"
                  onCancel={this.hideModal()}
                  onOk={this.handleSubmit()}
              >
                  <Form onSubmit={this.handleSubmit} className="login-form">
                      <Form.Item>
                          {getFieldDecorator('title', {
                              rules: [{ required: true, message: '请输入书名' }],
                          })(
                              <Input
                                  placeholder="请输入书名"
                              />,
                          )}
                      </Form.Item>
                      <Form.Item>
                          {getFieldDecorator('author', {
                              rules: [{ required: true, message: '请输入作者' }],
                          })(
                              <Input
                                  placeholder="请输入作者"
                              />,
                          )}
                      </Form.Item>
                      <Form.Item>
                          {getFieldDecorator('isbn', {
                              rules: [{ required: true, message: '请输入ISBN' }],
                          })(
                              <Input
                                  placeholder="请输入ISBN"
                              />,
                          )}
                      </Form.Item>
                      <Form.Item>
                          {getFieldDecorator('type', {
                              rules: [{ required: true, message: '请输入书籍类型' }],
                          })(
                              <Input placeholder="请输入书籍类型" />,
                          )}
                      </Form.Item>
                      <Form.Item>
                          {getFieldDecorator('price', {
                              rules: [{ required: true, message: '请输入价格' }],
                          })(
                              <Input placeholder="请输入价格" />,
                          )}
                      </Form.Item>
                      <Form.Item>
                          {getFieldDecorator('description', {
                              rules: [{ required: true, message: '请输入书籍描述' }],
                          })(
                              <Input placeholder="请输入书籍描述" />,
                          )}
                      </Form.Item>
                      <Form.Item>
                          {getFieldDecorator('inventory', {
                              rules: [{ required: true, message: '请输入库存' }],
                          })(
                              <Input placeholder="请输入库存" />,
                          )}
                      </Form.Item>
                      <Form.Item>
                          {getFieldDecorator('image1', {
                              rules: [{ required: true, message: '请输入封面（小图）' }],
                          })(
                              <Input placeholder="请输入封面（小图）" />,
                          )}
                      </Form.Item>
                      <Form.Item>
                          {getFieldDecorator('image2', {
                              rules: [{ required: true, message: '请输入封面（大图）' }],
                          })(
                              <Input placeholder="请输入封面（大图）" />,
                          )}
                      </Form.Item>

                      {/*<Form.Item>
                          {getFieldDecorator('password', {
                              rules: [{ required: true, message: 'Please input password' }],
                          })(
                              <Input
                                  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                  type="password"
                                  placeholder="Please input password"
                              />,
                          )}
                      </Form.Item>*/}

                  </Form>
              </Modal>


          </>
        );
    }










}
export  default  AddBookButton;