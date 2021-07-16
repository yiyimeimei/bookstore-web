package com.reins.bookstore.dao;

import com.reins.bookstore.entity.Book;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Map;

public interface BookDao {
    Book findOne(Integer id);

    List<Book> getBooks();

    List<Book> getBooksRankedBySales();

    List<Book> getSingleOrderBook(Integer bookId);

    List<Book> getBooksByKeyword(String keyword);

    Boolean deleteBookByBookId(Integer bookId);

    Boolean undercarriageBookByBookId(Integer bookId);

    Boolean putOnSale(Integer bookId);

    void modifyBook(Map<String, String> bookInfo);

    void placeOrder(Integer bookId, Integer purchaseNumber);

    List<Book> getBooksRankedBySalesByTime(Date start, Date end);

    List<Book> getConsumption();

    List<Book> getConsumptionByTime(Date start, Date end);

}
