package com.reins.bookstore.controller;

import com.alibaba.fastjson.serializer.SerializerFeature;
import com.alibaba.fastjson.JSON;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.reins.bookstore.entity.Book;
import com.reins.bookstore.entity.OrderInfo;
import com.reins.bookstore.entity.OrderItem;
import com.reins.bookstore.service.OrderInfoService;
import com.reins.bookstore.utils.msgutils.Message;
import com.reins.bookstore.utils.msgutils.MessageUtil;
import net.sf.json.JSONObject;
import org.aspectj.weaver.ast.Or;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.io.ByteArrayOutputStream;
import java.io.ObjectOutputStream;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@RestController
public class OrderInfoController {

    OrderInfoService orderInfoService;

    @Autowired
    void setOrderService(OrderInfoService orderInfoService) {
        this.orderInfoService = orderInfoService;
    }

    @RequestMapping("/placeOrder")
    Message placeOrder(@RequestBody JSONObject orderItems) {
        System.out.println(orderItems.toString());
        if (orderInfoService.placeOrder(orderItems))
            return MessageUtil.createMessage(MessageUtil.PURCHASE_SUCCESS_CODE, MessageUtil.PURCHASE_SUCCESS_MSG);
        return MessageUtil.createMessage(MessageUtil.PURCHASE_FAIL_CODE, MessageUtil.PURCHASE_FAIL_MSG);
    }

    @RequestMapping("/getAllOrders")
    List<OrderInfo> getAllOrders()
    {
        String json = JSON.toJSONString(orderInfoService.getAllOrders(), SerializerFeature.DisableCircularReferenceDetect);
        List<OrderInfo> newList = JSON.parseArray(json, OrderInfo.class);
        return newList;
    }

    @RequestMapping("/admin/getAllOrders")
    List<OrderInfo> getAllOrdersForManager() {
        String json = JSON.toJSONString(orderInfoService.getAllOrdersForManager(), SerializerFeature.DisableCircularReferenceDetect);
        List<OrderInfo> newList = JSON.parseArray(json, OrderInfo.class);
        return newList;
    }

    @RequestMapping("/searchOrders")
    @JsonFormat(pattern = "yyyy-MM-dd")
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    List<OrderInfo> searchOrders(@RequestBody ArrayList<Date> time)
    {
        String json = JSON.toJSONString(orderInfoService.getOrdersInRange(time), SerializerFeature.DisableCircularReferenceDetect);
        List<OrderInfo> newList = JSON.parseArray(json, OrderInfo.class);
        return newList;
    }

    @RequestMapping("/admin/searchOrders")
    @JsonFormat(pattern = "yyyy-MM-dd")
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    List<OrderInfo> searchOrdersForManager(@RequestBody ArrayList<Date> time) {
        String json = JSON.toJSONString(orderInfoService.getOrdersInRangeForManager(time), SerializerFeature.DisableCircularReferenceDetect);
        List<OrderInfo> newList = JSON.parseArray(json, OrderInfo.class);
        return newList;
    }



    @RequestMapping("/searchOrdersByKeyword")
    List<OrderInfo> searchOrdersByKeyword(@RequestParam("keyword") String keyword) {
        String json = JSON.toJSONString(orderInfoService.searchOrdersByKeyword(keyword), SerializerFeature.DisableCircularReferenceDetect);
        List<OrderInfo> newList = JSON.parseArray(json, OrderInfo.class);
        return newList;
    }

    @RequestMapping("/admin/searchOrdersByKeyword")
    List<OrderInfo> searchOrdersByKeywordForManager(@RequestParam("keyword") String keyword) {
        String json = JSON.toJSONString(orderInfoService.searchOrdersByKeywordForManager(keyword), SerializerFeature.DisableCircularReferenceDetect);
        List<OrderInfo> newList = JSON.parseArray(json, OrderInfo.class);
        return newList;
    }
}
