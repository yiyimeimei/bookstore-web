import config from 'config';
import {postRequest, postRequest_v2} from "../utils/ajax";
import {history} from '../utils/history';
import {message} from 'antd';



export const login = (data) => {
    const url = `${config.apiUrl}/login`;
    const callback = (data) => {
        if(data.status >= 0) {
            localStorage.setItem('user', JSON.stringify(data.data));
            history.push("/");
            message.success(data.msg);
        }
        else{
            message.error(data.msg);
        }
    };
    postRequest(url, data, callback);
};

export const logout = () => {
    const url = `${config.apiUrl}/logout`;

    const callback = (data) => {
        if(data.status >= 0) {
            localStorage.removeItem("user");
            history.push("/login");
            message.success(data.msg);
        }
        else{
            message.error(data.msg);
        }
    };
    postRequest(url, {}, callback);
};

export const checkSession = (callback) => {
    const url = `${config.apiUrl}/checkSession`;
    postRequest(url, {}, callback);
};

export const getUser = (callback) => {
    const url = 'http://localhost:8080/getUser';
    postRequest_v2(url, {}, callback);
};
/*
export function getUser(callback) {
    const url = 'http://localhost:8080/getUser';
    postRequest(url, {}, callback);
}*/
export function getUsers(callback) {
    const url = 'http://localhost:8080/getUsers';
    postRequest(url, {}, callback);
}
export function getAllCustomers(callback) {
    const url = 'http://localhost:8080/getAllCustomers';
    postRequest(url, {}, callback);
}
export function customerEnabled(userId,callback) {
    const url = `http://localhost:8080/customerEnabled?userId=${userId}`;
    postRequest(url, {}, callback);
}
export function customerDisabled(userId,callback) {
    const url = `http://localhost:8080/customerDisabled?userId=${userId}`;
    postRequest(url, {}, callback);
}
export function checkDuplication(username, callback) {
    const url = `http://localhost:8080/checkDuplication?username=${username}`;
    postRequest(url, {}, callback);
}

export function register(newUser, callback) {
    const url = `http://localhost:8080/register`;
    postRequest(url, newUser, callback);
}

export function getUsersRankedByConsumption(callback) {
    const url = 'http://localhost:8080/getUsersRankedByConsumption';
    postRequest(url, {}, callback);
}


export function getUsersRankedByConsumptionByTime(time, callback) {
    const url = 'http://localhost:8080/getUsersRankedByConsumptionByTime';
    postRequest(url, time, callback);
}