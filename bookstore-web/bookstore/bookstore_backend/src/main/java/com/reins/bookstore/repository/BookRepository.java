package com.reins.bookstore.repository;

import com.reins.bookstore.entity.Book;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import javax.transaction.Transactional;
import java.lang.reflect.Array;
import java.util.List;

@Transactional
public interface BookRepository extends JpaRepository<Book,Integer> {

    /*@Query("select b from Book b")*/
    /*@Query(value = "select * from bookstore.book", nativeQuery = true)
    List<Book> getBooks();*/

    @Query(value = "from Book")
    List<Book> getBooks();

    @Query(value = "from Book order by sales desc")
    List<Book> getBooksRankedBySales();

    @Query(value = "from Book where bookId =:bookId")
    Book getBookById(@Param("bookId") Integer bookId);

    @Modifying
    @Query(value = "delete from Book where bookId = ?1")
    Integer deleteBookByBookId(Integer bookId);

    @Query(value = "from Book where title like concat('%',:keyword,'%') or author like concat('%',:keyword,'%')")
    List<Book> getBooksByKeyword(@Param("keyword") String keyword);


    @Modifying
    @Query(value = "update Book set available = 0 where bookId = ?1")
    Integer undercarriageBookByBookId(Integer bookId);

    @Modifying
    @Query(value = "update Book set available = 1 where bookId = ?1")
    Integer putOnSale(Integer bookId);

    /*@Modifying
    @Query(value = "update Book set sales = sales + ?2, inventory = inventory - ?2 where bookId = ?1")
    void placeOrder(Integer bookId, Integer increment);*/


    @Modifying
    @Query(value = "update Book set isbn = ?2,title = ?3,author = ?4,type = ?5, price = ?6,description=?7,inventory = ?8,sales = ?9,image1 = ?10 ,image2 = ?11, available = ?12 where bookId = ?1")
    void modifyBookWithBookId(Integer bookId, String isbn, String title, String author, String type, Integer price, String description, Integer inventory, Integer sales, String image1, String image2, Integer available);


    /*@Query(value = "from Book where bookId = : id")
    Book getOne(@Param("id") Integer id);*/

    @Query(value = "select * from bookstore.book where id = bookId", nativeQuery = true)
    List<Book> getSingleOrderBook(@Param("bookId") Integer bookId);

    @Modifying
    @Query(value = "update Book set sales = sales + ?2, inventory = inventory - ?2 where bookId = ?1")
    void placeOrder(Integer bookId, Integer increment);


    @Query(value = "from Book where isbn = ?1")
    Book getBookByIsbn(String isbn);

    @Modifying
    @Query(value = "update Book set title = ?2,author = ?3,type = ?4, price = ?5,description=?6,inventory = ?7,sales = ?8,image1 = ?9 ,image2 = ?10, available = ?11 where isbn = ?1")
    void modifyBookWithIsbn(String isbn, String title, String author, String type, Integer price, String description, Integer inventory, Integer sales, String image1, String image2, Integer available);



}
