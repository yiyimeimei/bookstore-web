package com.reins.bookstore.dao;

import com.reins.bookstore.entity.Cart;
import org.springframework.data.repository.query.Param;

import javax.persistence.criteria.CriteriaBuilder;
import java.util.List;

public interface CartDao {
/*
    void addCartProduct(Integer customerId, Integer bookId, String bookTitle, String bookImage1, Double bookPrice);
*/

    List<Cart> getCartByCustomerId(Integer customerId);

    void deleteCartItem(Integer cartId);

    void addBookNumber(Integer bookId);

    void addCartItem(Integer bookId);

    List<Cart> getAllCartItems();

    Boolean existsBook(Integer bookId);

    List<Cart> searchCartItems(String keyword);
}
