package com.reins.bookstore.serviceimpl;

import com.reins.bookstore.constant.Constant;
import com.reins.bookstore.dao.UserDao;
import com.reins.bookstore.entity.Book;
import com.reins.bookstore.entity.User;
import com.reins.bookstore.entity.UserAuth;
import com.reins.bookstore.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

/**
 * @ClassName UserServiceImpl
 * @Description the implement of user service
 * @Author thunderBoy
 * @Date 2019/11/7 13:16
 */
@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserDao userDao;

    @Override
    public UserAuth checkUser(String username, String password) {
        return userDao.checkUser(username, password);
    }

    @Override
    public List<User> getUsers() {
        return userDao.getUsers();
    }

    @Override
    public List<User> getAllCustomers() {
        return userDao.getAllCustomers();
    }

    @Override
    public void customerEnabled(Integer userId)
    {
        userDao.customerEnabled(userId);
    }

    @Override
    public void customerDisabled(Integer userId)
    {
        userDao.customerDisabled(userId);
    }

    @Override
    public  User getUser(){return userDao.getUser();}

    @Override
    public Boolean checkDuplication(String userAccount)
    {
        System.out.println(userDao.getUserAuthByUsername(userAccount));
        return userDao.getUserAuthByUsername(userAccount) != null;
    }

    @Override
    @Transactional
    public void register(String userAccount, String userPassword, String userName, String userPhone, String userAddress, String userEmail)
    {
        System.out.println("register1");
        Integer newUserId = userDao.addUser(userName, userPhone, userAddress, userEmail, Constant.CUSTOMER, Constant.ENABLED);
        System.out.println("register2");
        userDao.addUserAuth(userAccount, Constant.CUSTOMER, Constant.ENABLED, newUserId, userPassword);
        System.out.println("register3");
    }


    @Override
    public List<User> getUsersRankedByConsumption() {
        return userDao.getUsersRankedByConsumption();
    }


    @Override
    public List<User> getUsersRankedByConsumptionByTime(ArrayList<Date> time)
    {
        if (time != null && time.size() == 2)
        {
            Date start = (Date) time.get(0);
            Date end = (Date) time.get(1);
            if (start != null && end != null)
                return userDao.getUsersRankedByConsumptionByTime(start, end);
        }
        return userDao.getUsersRankedByConsumption();
    }
}
