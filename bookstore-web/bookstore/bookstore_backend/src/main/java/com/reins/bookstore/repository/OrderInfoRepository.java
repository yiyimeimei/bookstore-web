package com.reins.bookstore.repository;


import com.reins.bookstore.entity.OrderInfo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.Date;

@Transactional
public interface OrderInfoRepository extends JpaRepository<OrderInfo,Integer> {

    @Modifying
    @Query(value = "insert into order_info (user_id) values(?1)", nativeQuery = true)
    void addOrder(@Param("userId") Integer userId);

    @Query(value = "from OrderInfo where userId = : userId")
    OrderInfo searchOrderByUserId(@Param("userId") Integer userId);

    @Query(value = "from OrderInfo where userId = ?1 order by orderId desc ")
    ArrayList<OrderInfo> getAllOrders(@Param("userId") Integer userId);

    @Query(value = "from OrderInfo order by orderId desc")
    ArrayList<OrderInfo> getAllOrdersForManager();

    @Query(value = "from OrderInfo where orderDate between ?1 and ?2  order by orderDate desc")
    ArrayList<OrderInfo> getOrdersInRangeForManager(Date start, Date end);

    @Query(value = "from OrderInfo where orderDate between ?2 and ?3 and userId = ?1 order by orderDate desc")
    ArrayList<OrderInfo> getOrdersInRange(Integer userId, Date start, Date end);

    /*@Query(value = "select * from `order_info` where order_info.user_id = ?1 and order_info.order_id = order_item.order_id and book.book_id = order_item.book_id and book.title like concat('%',:keyword,'%')", nativeQuery = true)
    ArrayList<OrderInfo> searchOrdersByKeyword(Integer userId, String keyword);*/

    @Query(value = "select * from `order_info` where order_info.order_id in (select distinct order_id from `order_item` where order_item.book_id in (select book_id from `book` where book.title like concat('%',:keyword,'%'))) and order_info.user_id = :userId", nativeQuery = true)
    ArrayList<OrderInfo> searchOrdersByKeyword(@Param("userId") Integer userId, @Param("keyword") String keyword);

    @Query(value = "select * from `order_info` where order_info.order_id in (select distinct order_id from `order_item` where order_item.book_id in (select book_id from `book` where book.title like concat('%',:keyword,'%')))", nativeQuery = true)
    ArrayList<OrderInfo> searchOrdersByKeywordForManager(@Param("keyword") String keyword);
}
