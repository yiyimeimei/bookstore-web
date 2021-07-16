package com.reins.bookstore.service;

import com.reins.bookstore.entity.OrderInfo;
import com.reins.bookstore.entity.OrderItem;
import net.sf.json.JSONObject;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public interface OrderInfoService {
    void addOrder(Integer userId);

    boolean placeOrder(JSONObject orderItems);

    List<OrderItem> getUserOrdersByOrderId(Integer orderId);

    ArrayList<OrderInfo> getAllOrders();

    ArrayList<OrderInfo> getAllOrdersForManager();

    ArrayList<OrderInfo> getOrdersInRange(ArrayList<Date> time);

    ArrayList<OrderInfo> getOrdersInRangeForManager(ArrayList<Date> time);

    ArrayList<OrderInfo> searchOrdersByKeyword(String keyword);

    ArrayList<OrderInfo> searchOrdersByKeywordForManager(String keyword);
}
