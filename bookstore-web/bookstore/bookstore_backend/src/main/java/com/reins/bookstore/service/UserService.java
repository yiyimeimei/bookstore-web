package com.reins.bookstore.service;

import com.reins.bookstore.entity.Book;
import com.reins.bookstore.entity.User;
import com.reins.bookstore.entity.UserAuth;

import javax.persistence.criteria.CriteriaBuilder;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;


public interface UserService {

    UserAuth checkUser(String username, String password);

    List<User> getUsers();

    List<User> getAllCustomers();

    void customerDisabled(Integer userId);

    void customerEnabled(Integer userId);

    /*Integer getUserStateByUsername(String username);*/
    User getUser();

    Boolean checkDuplication(String username);

    void register(String userAccount, String userPassword, String userName, String userPhone, String userAddress, String userEmail);

    List<User> getUsersRankedByConsumption();

    List<User> getUsersRankedByConsumptionByTime(ArrayList<Date> time);

}
