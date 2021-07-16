package com.reins.bookstore.service;

import com.reins.bookstore.entity.Cart;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface CartService {
/*
    void addCartProduct(Integer customerId, Integer bookId, String bookTitle, String bookImage1, Double bookPrice);
*/

    List<Cart> getCartByCustomerId(Integer customerId);

    Boolean addToCart(Integer bookId);

    void deleteCartItem(Integer cartId);

    List<Cart> getAllCartItems();

    List<Cart> searchCartItems(String keyword);
}
