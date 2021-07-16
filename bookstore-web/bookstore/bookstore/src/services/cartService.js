import config from 'config';
import {message} from "antd";
import {postRequest, postRequest_v2} from "../utils/ajax";
import {getBook} from "./bookService";
/*export function addCartProduct(customerId, bookId, bookTitle, bookImage1, bookPrice, callback) {
    const url = `http://localhost:8080/addCartProduct?customerId=${customerId}&bookId=${bookId}&bookTitle=${bookTitle}&bookImage1=${bookImage1}&bookPrice=${bookPrice}`;
    postRequest(url, {}, callback);
}*/
export function getCartByCustomerId(customerId, callback) {
    const url = `http://localhost:8080/getCartByCustomerId?customerId=${customerId}`;
    postRequest(url, {}, data => {
        console.log(data);
        data.map(element => {
            getBook(element.bookId, callback);
        });
    });
}

export function addToCart(bookId) {
    const url = `http://localhost:8080/addToCart?bookId=${bookId}`;
    postRequest(url, {}, data => {
        if (data.status < 0)
            message.warn(data.message, 2);
        else
            message.success(data.message, 2);
    });
}

export function deleteCart(cartId, callback) {
    const url = `http://localhost:8080/deleteCart?cartId=${cartId}`;
    postRequest(url, {}, callback);
}

export function getAllCartItems(callback) {
    const url = 'http://localhost:8080/getAllCartItems';
    postRequest(url, {}, callback);
}

export function searchCartItems(keyword, callback) {
    const url = `http://localhost:8080/searchCartItems?keyword=${keyword}`;
    postRequest(url, {}, callback);
}

