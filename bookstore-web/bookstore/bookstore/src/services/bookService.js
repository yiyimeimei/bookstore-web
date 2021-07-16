import config from 'config';
import {postRequest, postRequest_v2} from "../utils/ajax";


export const getBooks = (callback) => {
    const url = `http://localhost:8080/getBooks`;
    postRequest(url, {}, callback);
};

export const getBook = (id, callback) => {
    const data = {id: id};
    const url = `${config.apiUrl}/getBook`;
    postRequest_v2(url, data, callback);
};
export const getSingleOrderBook = (bookId, callback) => {
    const url = `http://localhost:8080/getSingleOrderBook?bookId=${bookId}`;
    postRequest(url, {}, callback);
};

export function modifyBook(book, callback) {
    const url = 'http://localhost:8080/modifyBook';
    postRequest(url, book, callback);
}

export function getBooksByKeyword(keyword, callback) {
    const url = `http://localhost:8080/getBooksByKeyword?keyword=${keyword}`;
    postRequest(url, {}, callback);
}
export function putOnSale(bookIdList, callback) {
    const url = 'http://localhost:8080/putOnSale';
    postRequest(url, bookIdList, callback)
}
export function deleteBooks(bookIdList, callback) {
    const url = 'http://localhost:8080/deleteBooks';
    postRequest(url, bookIdList, callback)
}

export function undercarriageBooks(bookIdList, callback) {
    const url = 'http://localhost:8080/undercarriage';
    postRequest(url, bookIdList, callback)
}

export const getBooksRankedBySales = (callback) => {
    const url = `http://localhost:8080/getBooksRankedBySales`;
    postRequest(url, {}, callback);
};

export function getBooksRankedBySalesByTime (time, callback){
    const url = `http://localhost:8080/getBooksRankedBySalesByTime`;
    postRequest(url, time, callback);
};

export const getConsumption = (callback) => {
    const url = `http://localhost:8080/getConsumption`;
    postRequest(url, {}, callback);
};

export function getConsumptionByTime (time, callback){
    const url = `http://localhost:8080/getConsumptionByTime`;
    postRequest(url, time, callback);
};