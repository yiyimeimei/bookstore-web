package com.reins.bookstore.repository;

import com.reins.bookstore.entity.Cart;
import com.reins.bookstore.entity.UserAuth;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Transactional
public interface CartRepository extends JpaRepository<Cart,Integer> {

/*
    @Modifying
    @Query(value = "insert into cart (customer_id, book_id, book_title, book_image1, book_price) values(?1,?2,?3,?4,?5)", nativeQuery = true)
    void addCartProduct(@Param("customerId") Integer customerId, @Param("bookId") Integer bookId, @Param("bookTitle") String bookTitle, @Param("bookImage1") String bookImage1, @Param("bookPrice") Double bookPrice);
*/


    @Query(value = "from Cart where userId = :customerId and bookId = :bookId")
    Cart searchProduct(@Param("customerId") Integer customerId, @Param("bookId") Integer bookId);

    @Query(value = "from Cart where userId = :customerId")
    List<Cart> getCartByCustomerId(@Param("customerId") Integer customerId);

    @Query(value = "from Cart where userId = ?1")
    List<Cart> getAllCartItems(Integer userId);

    @Query(value = "from Cart where cartId = ?1")
    Cart getUserCartByCartId(Integer cartId);

    @Query(value = "from Cart where userId = ?1 and (book.title like concat('%',?2,'%') or book.author like concat('%',?2,'%'))")
    List<Cart> searchCartItems(Integer userId, String keyword);

    @Modifying
    @Query(value = "delete from Cart where cartId=?1")
    void deleteUserCartByCartId(Integer cartId);

    @Query(value = "from Cart where bookId = ?1 and userId = ?2")
    Cart getCartByBookIdAndUserId(Integer bookId, Integer userId);

    @Modifying
    @Query(value = "update Cart set bookNumber = bookNumber + 1 where bookId = ?1")
    void addBookNumber(Integer bookId);
}
