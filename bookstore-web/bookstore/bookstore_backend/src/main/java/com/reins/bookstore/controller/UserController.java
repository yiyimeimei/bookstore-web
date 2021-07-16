package com.reins.bookstore.controller;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.serializer.SerializerFeature;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.reins.bookstore.entity.Book;
import com.reins.bookstore.entity.OrderInfo;
import com.reins.bookstore.entity.User;
import com.reins.bookstore.entity.UserAuth;
import com.reins.bookstore.service.UserService;
import com.reins.bookstore.utils.msgutils.Message;
import com.reins.bookstore.utils.msgutils.MessageUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Map;

/**
 * @ClassName UserController
 * @Description the controller of user
 * @Author thunderBoy
 * @Date 2019/11/7 13:47
 */
@RestController
public class UserController {

    @Autowired
    private UserService userService;

    @RequestMapping("/checkUser")
    public UserAuth checkUser(@RequestParam("username") String username,@RequestParam("password") String password){
        return userService.checkUser(username, password);
    }

    @RequestMapping("/getUsers")
    public List<User> getUsers(){
        System.out.println("userController");
        return userService.getUsers();
    }

    @RequestMapping("/getAllCustomers")
    public List<User> getAllCustomers(){
        //System.out.println("userController");
        return userService.getAllCustomers();
    }

    @RequestMapping("/customerEnabled")
    public void customerEnabled(@RequestParam("userId") Integer userId){
        //System.out.println("userController");
        userService.customerEnabled(userId);
    }

    @RequestMapping("/customerDisabled")
    public void customerDisabled(@RequestParam("userId") Integer userId){
        //System.out.println("userController");
        userService.customerDisabled(userId);
    }


    @RequestMapping("/getUser")
    User getUser() {
        return userService.getUser();
    }

    @RequestMapping("/checkDuplication")
    Boolean checkDuplication(@RequestParam("username") String username) {
        return userService.checkDuplication(username);
    }

    @RequestMapping("/register")
    Message register(@RequestBody Map<String, String> registerInfo) {
        System.out.println(registerInfo);
        String userAccount = registerInfo.get("userAccount");
        String userName = registerInfo.get("userName");
        String userPhone = registerInfo.get("userPhone");
        String userPassword = registerInfo.get("userPassword");
        String userAddress = registerInfo.get("userAddress");
        String userEmail = registerInfo.get("userEmail");
        userService.register(userAccount, userPassword, userName, userPhone, userAddress, userEmail);
        return MessageUtil.createMessage(MessageUtil.REGISTER_SUCCESS_CODE, MessageUtil.REGISTER_SUCCESS_MSG);
    }


    @RequestMapping("/getUsersRankedByConsumption")
    public List<User> getUsersRankedByConsumption() { return userService.getUsersRankedByConsumption(); }


    @RequestMapping("/getUsersRankedByConsumptionByTime")
    @JsonFormat(pattern = "yyyy-MM-dd")
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    public List<User> getUsersRankedByConsumptionByTime(@RequestBody ArrayList<Date> time)
    {
        String json = JSON.toJSONString(userService.getUsersRankedByConsumptionByTime(time), SerializerFeature.DisableCircularReferenceDetect);
        List<User> newList = JSON.parseArray(json, User.class);
        return newList;
    }
}
