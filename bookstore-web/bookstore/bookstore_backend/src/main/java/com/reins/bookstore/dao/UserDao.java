package com.reins.bookstore.dao;

import com.reins.bookstore.entity.Book;
import com.reins.bookstore.entity.User;
import com.reins.bookstore.entity.UserAuth;

import java.util.Date;
import java.util.List;

public interface UserDao {

    UserAuth checkUser(String username, String password);

    List<User> getUsers();

    List<User> getAllCustomers();

    void customerEnabled(Integer userId);

    void customerDisabled(Integer userId);

    /*Integer getUserStateByUsername(String username);*/
    User getUser();

    User getUserByUserId(Integer userId);

    UserAuth getUserAuthByUsername(String username);

    Integer addUser(String userName, String userPhone, String userAddress, String userEmail, Integer userType, Integer userState);

    void addUserAuth(String userAcccout, Integer userType, Integer userState, Integer userId, String userPassword);

    void addConsumptionByUserId(Integer userId, Integer consumption);

    List<User> getUsersRankedByConsumption();

    List<User> getUsersRankedByConsumptionByTime(Date start, Date end);
}
