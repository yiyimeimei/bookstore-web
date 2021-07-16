package com.reins.bookstore.service;

import com.reins.bookstore.entity.Book;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Map;


public interface BookService {

    Book findBookById(Integer id);

    List<Book> getBooks();

    List<Book> getBooksRankedBySales();

    List<Book> getSingleOrderBook(Integer bookId);

    List<Book> getBooksByKeyword(String keyword);

    Boolean deleteBooks(ArrayList<Integer> bookIdList);

    Boolean undercarriage(ArrayList<Integer> bookIdList);

    Boolean putOnSale(ArrayList<Integer> bookIdList);

    void modifyBook(Map<String, String> bookInfo);

    List<Book> getBooksRankedBySalesByTime(ArrayList<Date> time);


    List<Book> getConsumption();

    List<Book> getConsumptionByTime(ArrayList<Date> time);

}
