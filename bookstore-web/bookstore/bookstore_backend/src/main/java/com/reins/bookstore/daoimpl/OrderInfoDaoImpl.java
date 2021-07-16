package com.reins.bookstore.daoimpl;

import com.reins.bookstore.dao.OrderInfoDao;
import com.reins.bookstore.entity.Book;
import com.reins.bookstore.entity.OrderInfo;
import com.reins.bookstore.entity.OrderItem;
import com.reins.bookstore.repository.BookRepository;
import com.reins.bookstore.repository.OrderItemRepository;
import com.reins.bookstore.repository.OrderInfoRepository;
import com.reins.bookstore.repository.UserRepository;
import com.reins.bookstore.utils.sessionutils.SessionUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Repository
public class OrderInfoDaoImpl implements OrderInfoDao {

    OrderInfoRepository orderInfoRepository;
    OrderItemRepository orderItemRepository;
    UserRepository userRepository;
    BookRepository bookRepository;

    @Autowired
    void setUserOrderRepository(OrderItemRepository orderItemRepository) {
        this.orderItemRepository = orderItemRepository;
    }

    @Autowired
    void setBookRepository(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    @Autowired
    void setOrderInfoRepository(OrderInfoRepository orderInfoRepository) {
        this.orderInfoRepository = orderInfoRepository;
    }

    @Autowired
    void setUserRepository(UserRepository userRepository) {
        this.userRepository = userRepository;
    }
    @Autowired
    void setOrderRepository(OrderInfoRepository orderInfoRepository) {
        this.orderInfoRepository = orderInfoRepository;
    }

    @Override
    public void addOrder(Integer userId)
    {
        orderInfoRepository.addOrder(userId);
        //return orderRepository.searchOrderByUserId(userId);

    }

    @Override
    public List<OrderItem> searchOrderItemByBookId(Integer bookId)
    {
        System.out.println("orderItemRepository.searchOrderItemsByBookId(bookId)");
        System.out.println(orderItemRepository.searchOrderItemsByBookId(bookId));
        return orderItemRepository.searchOrderItemsByBookId(bookId);
    }





    @Override
    public List<OrderItem> getUserOrdersByOrderId(Integer orderId) {
        return orderItemRepository.getOrderItemsByOrderId(orderId);
    }

    @Override
    @Transactional
    public Integer placeOrder(String receiver, String address, String tel) {
        Integer userId = SessionUtil.getUserId();

        if (userId != null) {
            OrderInfo o = new OrderInfo();
            o.setUserId(userId);
            o.setOrderReceiver(receiver);
            o.setOrderAddress(address);
            o.setOrderTel(tel);
            o.setOrderDate(Timestamp.valueOf(LocalDateTime.now()));
            return orderInfoRepository.saveAndFlush(o).getOrderId();
        }
        return null;
    }

    @Override
    public void addOrderItem(Integer orderId, Integer bookId, Integer bookNumber) {
        OrderItem orderItem = new OrderItem();
        orderItem.setOrderId(orderId);
        orderItem.setBookNumber(bookNumber);
        orderItem.setBookId(bookId);
        Book book = bookRepository.getBookById(bookId);
        orderItem.setBook(book);
        System.out.println("OI" + orderItem);
        orderItemRepository.save(orderItem);
    }

    @Override
    public ArrayList<OrderInfo> getAllOrders() {
        Integer userId = SessionUtil.getUserId();
        if (userId != null)
            return orderInfoRepository.getAllOrders(userId);
        return null;
    }

    @Override
    public ArrayList<OrderInfo> getAllOrdersForManager() {
        System.out.println(orderInfoRepository.getAllOrdersForManager());
        return orderInfoRepository.getAllOrdersForManager();
    }

    @Override
    public ArrayList<OrderInfo> getOrdersInRange(Date start, Date end) {
        Integer userId = SessionUtil.getUserId();
        if (userId != null) {
            return orderInfoRepository.getOrdersInRange(userId, start, end);
        }
        return null;
    }

    @Override
    public ArrayList<OrderInfo> getOrdersInRangeForManager(Date start, Date end) {
        return orderInfoRepository.getOrdersInRangeForManager(start, end);
    }


    @Override
    @Transactional
    public ArrayList<OrderInfo> searchOrdersByKeyword(String keyword){
        Integer userId = SessionUtil.getUserId();
        if (userId != null) {
            return orderInfoRepository.searchOrdersByKeyword(userId, keyword);
        }
        return null;
    }

    @Override
    @Transactional
    public ArrayList<OrderInfo> searchOrdersByKeywordForManager(String keyword){
        return orderInfoRepository.searchOrdersByKeywordForManager(keyword);
    }


}
