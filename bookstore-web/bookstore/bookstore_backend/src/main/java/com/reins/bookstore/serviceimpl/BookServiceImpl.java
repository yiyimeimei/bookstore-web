package com.reins.bookstore.serviceimpl;

import com.reins.bookstore.dao.BookDao;
import com.reins.bookstore.dao.OrderInfoDao;
import com.reins.bookstore.entity.Book;
import com.reins.bookstore.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Map;

/**
 * @ClassName BookServiceImpl
 * @Description the Implement of BookService
 * @Author thunderBoy
 * @Date 2019/11/6 16:04
 */

@Service
public class BookServiceImpl implements BookService {

    @Autowired
    private BookDao bookDao;

    @Autowired
    private OrderInfoDao orderInfoDao;

    @Override
    public Book findBookById(Integer id){
        return bookDao.findOne(id);
    }

    @Override
    public List<Book> getBooks() {
        return bookDao.getBooks();
    }

    @Override
    public List<Book> getBooksRankedBySales() {
        return bookDao.getBooksRankedBySales();
    }

    @Override
    public List<Book> getSingleOrderBook(Integer bookId) {

        System.out.println("servicesssfsdfsdf");

        return bookDao.getSingleOrderBook(bookId);
    }

    @Override
    public List<Book> getBooksByKeyword(String keyword) {
        return bookDao.getBooksByKeyword(keyword);
    }


    @Override
    @Transactional
    public Boolean deleteBooks(ArrayList<Integer> bookIdList)
    {
        for(Integer bookId: bookIdList) {
            System.out.println("orderInfoDao.searchOrderItemByBookId(bookId).toArray().length");
            if(orderInfoDao.searchOrderItemByBookId(bookId).toArray().length > 0)
            {
                return false;
            }
        }
        for (Integer bookId : bookIdList) {
            Boolean flag = bookDao.deleteBookByBookId(bookId);
            System.out.println(flag);
            if (!flag)
                return false;
        }
        return true;
    }

    @Override
    public Boolean undercarriage(ArrayList<Integer> bookIdList) {
        for (Integer bookId : bookIdList) {
            if (!bookDao.undercarriageBookByBookId(bookId))
                return false;
        }
        return true;
    }

    @Override
    public Boolean putOnSale(ArrayList<Integer> bookIdList) {
        for (Integer bookId : bookIdList) {
            if (!bookDao.putOnSale(bookId))
                return false;
        }
        return true;
    }


    @Override
    public void modifyBook(Map<String, String> bookInfo) {
        bookDao.modifyBook(bookInfo);
    }

    @Override
    @Transactional
    public List<Book> getBooksRankedBySalesByTime(ArrayList<Date> time)
    {
        if (time != null && time.size() == 2)
        {
            Date start = (Date) time.get(0);
            Date end = (Date) time.get(1);
            if (start != null && end != null)
                return bookDao.getBooksRankedBySalesByTime(start, end);
        }
        return bookDao.getBooksRankedBySales();
    }

    @Override
    public List<Book> getConsumption() {
        return bookDao.getConsumption();
    }

    @Override
    public List<Book> getConsumptionByTime(ArrayList<Date> time)
    {
        if (time != null && time.size() == 2)
        {
            Date start = (Date) time.get(0);
            Date end = (Date) time.get(1);
            if (start != null && end != null)
                return bookDao.getConsumptionByTime(start, end);
        }
        return bookDao.getConsumption();
    }
}
