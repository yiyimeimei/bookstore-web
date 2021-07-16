package com.reins.bookstore.dao;

import com.reins.bookstore.entity.OrderInfo;
import com.reins.bookstore.entity.OrderItem;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public interface OrderInfoDao {
    void addOrder(Integer userId);

    ArrayList<OrderInfo> getAllOrders();

    ArrayList<OrderInfo> getAllOrdersForManager();

    List<OrderItem> getUserOrdersByOrderId(Integer orderId);

    Integer placeOrder(String receiver, String address, String tel);

    void addOrderItem(Integer orderId, Integer bookId, Integer purchaseNumber);
    ArrayList<OrderInfo> getOrdersInRange(Date start, Date end);


    ArrayList<OrderInfo> getOrdersInRangeForManager(Date start, Date end);

    ArrayList<OrderInfo> searchOrdersByKeyword(String keyword);

    ArrayList<OrderInfo> searchOrdersByKeywordForManager(String keyword);

    List<OrderItem> searchOrderItemByBookId(Integer bookId);
}
