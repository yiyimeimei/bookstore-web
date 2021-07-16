package com.reins.bookstore.utils.msgutils;
import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

public class MessageUtil {

    public static final String ADD_TO_CART_SUCCESS_MSG = "加入购物车成功!";
    public static final String PURCHASE_SUCCESS_MSG = "购买成功！";
    public static final String PURCHASE_FAIL_MSG = "购买失败！";
    public static final String DELETE_SUCCESS_MSG = "删除成功!";
    public static final String DELETE_FAIL_MSG = "删除失败！相关订单中包含所选商品，无法删除！";
    public static final String HAVE_NO_AUTHORITY_MSG = "您没有相关权限!";
    public static final String PUT_ON_SALE_SUCCESS_MSG = "商品美美开卖啦！";
    public static final String PUT_ON_SALE_FAIL_MSG = "开卖失败，不愿再笑！";
    public static final String UNDERCARRIAGE_FAIL_MSG = "下架商品失败！";
    public static final String UNDERCARRIAGE_SUCCESS_MSG = "商品美美下架啦！";
    public static final String BANNED_MSG = "您的账号已被禁用！";
    public static final String GENERAL_SUCCESS_MSG = "操作成功！";
    public static final String GENERAL_FAIL_MSG = "操作失败！";
    public static final String WRONG_FILE_FORMAT_MSG = "上传失败！请上传正确的csv文件！";
    public static final String UPLOAD_SUCCESS_MSG = "上传成功！";

    public static final String REGISTER_SUCCESS_MSG = "注册成功!";
    public static final int REGISTER_SUCCESS_CODE = 500;

    public static final int UPLOAD_SUCCESS_CODE = 13;
    public static final int WRONG_FILE_FORMAT_CODE = -13;
    public static final int PUT_ON_SALE_FAIL_CODE = -12;
    public static final int PUT_ON_SALE_SUCCESS_CODE = 10;
    public static final int BANNED_CODE = -10;
    public static final int GENERAL_FAIL_CODE = -255;
    public static final int GENERAL_SUCCESS_CODE = 255;
    public static final int LOGIN_ERROR_CODE = -1;
    public static final int LOGIN_SUCCESS_CODE = 1;
    public static final int NOT_LOGIN_CODE = -2;
    public static final int ALREADY_LOGIN_CODE = 0;
    public static final int LOGOUT_SUCCESS_CODE = 2;
    public static final int FAVOURITE_ALREADY_EXIST_CODE = -4;
    public static final int ADD_FAVOURITE_SUCCESS_CODE = 5;
    public static final int LOGOUT_ERROR_CODE = -3;
    public static final int ADD_TO_CART_SUCCESS_CODE = 6;
    public static final int PURCHASE_SUCCESS_CODE = 7;
    public static final int CART_ALREADY_EXIST_CODE = -6;
    public static final int PURCHASE_FAIL_CODE = -5;
    public static final int DELETE_SUCCESS_CODE = 2;
    public static final int HAVE_NO_AUTHORITY_CODE = -50;
    public static final int DELETE_FAIL_CODE = -6;
    public static final int UNDERCARRIAGE_FAIL_CODE = -8;
    public static final int UNDERCARRIAGE_SUCCESS_CODE = 9;

    public static Message createMessage(int statusCode, String message) {
        return new Message(statusCode, message);
    }

    public static Message createMessage(int statusCode, String message, JSONObject data) {
        return new Message(statusCode, message, data);
    }

    public static Message createMessage(int statusCode, String message, JSONArray arrayData) {
        return new Message(statusCode, message, arrayData);
    }
}

