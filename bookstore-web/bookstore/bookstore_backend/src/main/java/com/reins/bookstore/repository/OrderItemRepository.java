package com.reins.bookstore.repository;


import com.reins.bookstore.entity.OrderItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import javax.transaction.Transactional;
import java.util.List;

@Transactional
public interface OrderItemRepository extends JpaRepository<OrderItem, Integer> {
    @Query(value = "from OrderItem where orderId = ?1")
    List<OrderItem> getOrderItemsByOrderId(Integer orderId);

    @Query(value = "from OrderItem where bookId = ?1")
    List<OrderItem> searchOrderItemsByBookId(Integer bookId);
}
