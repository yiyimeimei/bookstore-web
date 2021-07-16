package com.reins.bookstore.controller;

import com.reins.bookstore.entity.Book;
import com.reins.bookstore.entity.Cart;
import com.reins.bookstore.service.CartService;
import com.reins.bookstore.utils.msgutils.Message;
import com.reins.bookstore.utils.msgutils.MessageUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

@RestController
public class CartController {
    CartService cartService;

    @Autowired
    void setCartService(CartService cartService) {
        this.cartService = cartService;
    }

    /*@RequestMapping("/addCartProduct")
    public void addCartProduct(@RequestParam("customerId") Integer customerId, @RequestParam("bookId") Integer bookId, @RequestParam("bookTitle") String bookTitle, @RequestParam("bookImage1") String bookImage1, @RequestParam("bookPrice") Double bookPrice) {
        cartService.addCartProduct(customerId, bookId, bookTitle, bookImage1, bookPrice);
    }*/
    @RequestMapping("/getCartByCustomerId")
    public List<Cart> getCartByCustomerId(@RequestParam("customerId") Integer customerId)
    {
        return cartService.getCartByCustomerId(customerId);
    }

    @RequestMapping("/deleteCart")
    void deleteCartItem(@RequestParam("cartId") Integer cartId) {
        cartService.deleteCartItem(cartId);
    }

    @RequestMapping("/getAllCartItems")
    List<Cart> getAllCartItems() {
        return cartService.getAllCartItems();
    }

    @RequestMapping("/addToCart")
    Message addToCart(@RequestParam("bookId") Integer bookId) {
        cartService.addToCart(bookId);
        /*if (cartService.addToCart(bookId))
            return MessageUtil.createMessage(MessageUtil.ADD_TO_CART_SUCCESS_CODE, MessageUtil.ADD_TO_CART_SUCCESS_MSG);
        return MessageUtil.createMessage(MessageUtil.CART_ALREADY_EXIST_CODE, MessageUtil.CART_ALREADY_EXIST_MSG);*/
        return MessageUtil.createMessage(MessageUtil.ADD_TO_CART_SUCCESS_CODE, MessageUtil.ADD_TO_CART_SUCCESS_MSG);
    }

    @RequestMapping("/searchCartItems")
    List<Cart> searchCartItems(@RequestParam("keyword") String keyword) {
        return cartService.searchCartItems(keyword);
    }


}
