package com.reins.bookstore.daoimpl;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.serializer.SerializerFeature;
import com.reins.bookstore.constant.Constant;
import com.reins.bookstore.dao.UserDao;
import com.reins.bookstore.entity.*;
import com.reins.bookstore.repository.BookRepository;
import com.reins.bookstore.repository.OrderInfoRepository;
import com.reins.bookstore.repository.UserAuthRepository;
import com.reins.bookstore.repository.UserRepository;
import com.reins.bookstore.utils.sessionutils.SessionUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import javax.persistence.criteria.CriteriaBuilder;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import javax.transaction.Transactional;
import java.util.*;

/**
 * @ClassName UserDaoImpl
 * @Description the implement of user dao
 * @Author thunderBoy
 * @Date 2019/11/7 13:19
 */
@Repository
public class UserDaoImpl implements UserDao {

    @Autowired
    UserAuthRepository userAuthRepository;

    @Autowired
    UserRepository userRepository;

    @Autowired
    OrderInfoRepository orderInfoRepository;

    @Autowired
    BookRepository bookRepository;

    @Override
    public UserAuth checkUser(String username, String password)
    {
        return userAuthRepository.checkUser(username,password);
    }

    /*@Override
    public User getUser()
    {
        System.out.println("userDao1");
        ServletRequestAttributes servletRequestAttributes = (ServletRequestAttributes) RequestContextHolder.getRequestAttributes();
        System.out.println("userDao2");
        if (servletRequestAttributes != null)
        {
            HttpServletRequest request = servletRequestAttributes.getRequest();
            System.out.println("userDao3");
            HttpSession session = request.getSession(false);
            System.out.println("userDao4");
            if (session != null) {
                //Integer userId = (Integer) session.getAttribute("userId");
                System.out.println("userDao5");
                String userId = (String) session.getAttribute("userId");
                System.out.println("userDao6");
                //return userRepository.getUserById(Integer.valueOf(userId));
                return userRepository.getUserById(userId);
            }
        }
        System.out.println("userDao7");
        return null;
    }*/

    @Override
    public List<User> getUsers()
    {
        return userRepository.getUsers();
    }

    @Override
    public List<User> getAllCustomers()
    {
        return userRepository.getAllCustomers();
    }

    @Override
    @Transactional
    public void customerEnabled(Integer userId)
    {
        userRepository.customerEnabled(userId);
        userAuthRepository.customerEnabled(userId);
    }

    @Override
    @Transactional
    public void customerDisabled(Integer userId)
    {
        userRepository.customerDisabled(userId);
        userAuthRepository.customerDisabled(userId);
    }

    /*@Override
    public Integer getUserStateByUsername(String username)
    {
        return userAuthRepository.getUserStateByUsername(username);
    }*/

    @Override
    public User getUser() {
        Integer userId = SessionUtil.getUserId();
        if (userId != null)
            return userRepository.getUserById(userId);
        return null;
    }

    @Override
    public User getUserByUserId(Integer userId) {
        return userRepository.getUserById(userId);
    }

    @Override
    public UserAuth getUserAuthByUsername(String username)
    {
        return userAuthRepository.getUserAuthByUsername(username);
    }

    @Override
    public Integer addUser(String userName, String userPhone, String userAddress, String userEmail, Integer userType, Integer userState)
    {
        User u = new User();
        u.setAddress(userAddress);
        u.setUserType(userType);
        u.setUserState(userState);
        u.setName(userName);
        u.setTel(userPhone);
        u.setConsumption(0);
        u.setEmail(userEmail);
        System.out.println(u);
        return userRepository.save(u).getUserId();
    }

    @Override
    public void addUserAuth(String userAcccout, Integer userType, Integer userState, Integer userId, String userPassword)
    {
        UserAuth u = new UserAuth();
        u.setUserId(userId);
        u.setUsername(userAcccout);
        u.setUserState(userState);
        u.setPassword(userPassword);
        u.setUserType(userType);
        System.out.println("userauth");
        System.out.println(u.getUsername());
        System.out.println(u.getUserId());
        System.out.println(u.getUserState());
        System.out.println(u.getUserType());
        System.out.println(u.getPassword());

        userAuthRepository.save(u);
    }

    @Override
    public void addConsumptionByUserId(Integer userId, Integer consumption)
    {
        User u = userRepository.getUserById(userId);
        Integer sum = u.getConsumption() + consumption;
        userRepository.addConsumptionByUserId(userId, sum);
    }


    @Override
    public List<User> getUsersRankedByConsumption() {
        return userRepository.getUsersRankedByConsumption();
    }



    @Override
    @Transactional
    public List<User> getUsersRankedByConsumptionByTime(Date start, Date end)
    {
        System.out.println("getUsersRankedByConsumptionByTime");
        List<User> tmp = userRepository.getUsers();
        String json = JSON.toJSONString(tmp, SerializerFeature.DisableCircularReferenceDetect);
        List<User> userList = JSON.parseArray(json, User.class);
        int[] consumptionList = new int[userList.get(userList.size() - 1).getUserId() + 1];
        ArrayList<OrderInfo> orderList = orderInfoRepository.getOrdersInRangeForManager(start, end);
        for(OrderInfo info: orderList)
        {
            List<OrderItem> orderItemList = info.getOrders();
            Integer totalPrice = 0;
            for(OrderItem item: orderItemList)
            {
                totalPrice += item.getBookNumber() * item.getBook().getPrice();
            }
            consumptionList[info.getUserId()] += totalPrice;
        }
        for(User u: userList)
        {
            u.setConsumption(consumptionList[u.getUserId()]);
            u.setName(userAuthRepository.getUserAuthByUserId(u.getUserId()).getUsername());
        }
        Collections.sort(userList, new Comparator<User>() {
            @Override
            public int compare(User u1, User u2)
            {
                int diff = u1.getConsumption() - u2.getConsumption();
                if(diff > 0)
                    return -1;
                else if(diff < 0)
                    return 1;
                else
                    return 0;
            }
        });
        System.out.println(userList);
        return userList;
    }
}
