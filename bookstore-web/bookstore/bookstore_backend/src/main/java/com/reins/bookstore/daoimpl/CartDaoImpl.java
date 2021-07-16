package com.reins.bookstore.daoimpl;

import com.reins.bookstore.dao.CartDao;
import com.reins.bookstore.entity.Cart;
import com.reins.bookstore.repository.CartRepository;
import com.reins.bookstore.utils.sessionutils.SessionUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import javax.persistence.criteria.CriteriaBuilder;
import java.util.List;

@Repository
public class CartDaoImpl implements CartDao {

    CartRepository cartRepository;
    @Autowired
    void setCartRepository(CartRepository cartRepository) {
        this.cartRepository = cartRepository;
    }

    @Override
    public List<Cart> getCartByCustomerId(Integer customerId)
    {
        System.out.println("dao");
        return cartRepository.getCartByCustomerId(customerId);
    }


    @Override
    public void deleteCartItem(Integer cartId) {
        cartRepository.deleteUserCartByCartId(cartId);
    }

    @Override
    public void addCartItem(Integer bookId) {
        Integer userId = SessionUtil.getUserId();
        if (userId != null) {
            Cart cart = new Cart();
            cart.setBookId(bookId);
            cart.setBookNumber(1);
            cart.setUserId(userId);
            cartRepository.save(cart);
        }
    }

    @Override
    public void addBookNumber(Integer bookId)
    {
        cartRepository.addBookNumber(bookId);
    }

    @Override
    public List<Cart> getAllCartItems() {
        Integer userId = SessionUtil.getUserId();
        if (userId != null)
            return cartRepository.getAllCartItems(userId);
        else
            return null;
    }

    @Override
    public Boolean existsBook(Integer bookId) {
        return cartRepository.getCartByBookIdAndUserId(bookId, SessionUtil.getUserId()) != null;
    }

    @Override
    public List<Cart> searchCartItems(String keyword) {
        return cartRepository.searchCartItems(SessionUtil.getUserId(), keyword);
    }
}
