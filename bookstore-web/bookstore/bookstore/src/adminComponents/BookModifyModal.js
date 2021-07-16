import React from 'react'
import {Modal, Form, Avatar} from "antd";
import PropTypes from 'prop-types'
import Input from "antd/es/input";
import {modifyBook} from "../services/bookService";
import {history} from "../utils/history";

const {TextArea} = Input;

class BookModifyModal extends React.Component {
    static propTypes = {
        bookToModify: PropTypes.object.isRequired,
        closeFunc: PropTypes.func.isRequired,
    };

    constructor(props) {
        super(props);
        let bookToModify = props.bookToModify;
        console.log(bookToModify);
        this.state = {
            bookToModify: bookToModify,
        }
    }

    monitorSave = (target, e) => {
        console.log("change");
        let value = e.target.value;
        switch (target) {
            case "title":
                this.state.bookToModify.title = value;
                break;
            case "price":
                this.state.bookToModify.price = value;
                break;
            case "image1":
                this.state.bookToModify.image1 = value;
                break;
            case "image2":
                this.state.bookToModify.image2 = value;
                break;
            case "author":
                this.state.bookToModify.author = value;
                break;
            case "description":
                this.state.bookToModify.description = value;
                break;
            case "isbn":
                this.state.bookToModify.isbn = value;
                break;
            case "type":
                this.state.bookToModify.type = value;
                break;
            case "inventory":
                this.state.bookToModify.inventory = value;
                break;
            default:
                break;
        }
    };

    onSubmit = () => {
        console.log(this.state.bookToModify);
        console.log("this.state.bookToModify");
        modifyBook(this.state.bookToModify);

        setTimeout(() => {
            history.go(0);
        }, 300);
    };

    render() {
        return (
            <Modal title="Basic Modal" visible={true} okText={'确认提交修改'} cancelText={'取消'}
                   onCancel={this.props.closeFunc} onOk={this.onSubmit}>
                <Form style={{marginTop: '10px'}}>
                    <Form.Item name="image1" label="封面" rules={[{required: false}]}>
                        <Avatar shape={"square"} size={"large"} src={this.state.bookToModify.image1}/>
                        <Input defaultValue={this.state.bookToModify.image1}
                               onChange={this.monitorSave.bind(this, "image1")}/>
                    </Form.Item>
                    <Form.Item name="image2" label="详情页图片" rules={[{required: false}]}>
                        <Avatar shape={"square"} size={"large"} src={this.state.bookToModify.image2}/>
                        <Input defaultValue={this.state.bookToModify.image2}
                               onChange={this.monitorSave.bind(this, "image2")}/>
                    </Form.Item>
                    <Form.Item name="title" label="书名" rules={[{required: false}]}>
                        <Input defaultValue={this.state.bookToModify.title}
                               onChange={this.monitorSave.bind(this, "title")}/>
                    </Form.Item>
                    <Form.Item name="author" label="作者" rules={[{required: false}]}>
                        <Input defaultValue={this.state.bookToModify.author}
                               onChange={this.monitorSave.bind(this, "author")}/>
                    </Form.Item>
                    <Form.Item name="isbn" label="ISBN号" rules={[{required: false}]}>
                        <Input maxLength={200} showCount autoSize={true}
                               defaultValue={this.state.bookToModify.isbn}
                               onChange={this.monitorSave.bind(this, "isbn")}/>
                    </Form.Item>
                    <Form.Item name="description" label="书籍描述" rules={[{required: false}]}>
                    <TextArea maxLength={100} showCount autoSize={true}
                              defaultValue={this.state.bookToModify.description}
                              onChange={this.monitorSave.bind(this, "description")}/>
                    </Form.Item>
                    <Form.Item name="type" label="类型" rules={[{required: false}]}>
                        <Input defaultValue={this.state.bookToModify.type}
                               onChange={this.monitorSave.bind(this, "type")}/>
                    </Form.Item>
                    <Form.Item name="inventory" label="库存" rules={[{required: false}]}>
                        <Input defaultValue={this.state.bookToModify.inventory}
                               onChange={this.monitorSave.bind(this, "inventory")}/>
                    </Form.Item>
                    <Form.Item name="price" label="价格" rules={[{required: false}]}>
                        <Input defaultValue={this.state.bookToModify.price}
                               onChange={this.monitorSave.bind(this, "price")}/>
                    </Form.Item>


                </Form>
            </Modal>
        )
    }
}

export default BookModifyModal;