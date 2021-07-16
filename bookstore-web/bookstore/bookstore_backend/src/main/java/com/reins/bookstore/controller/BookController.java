package com.reins.bookstore.controller;
import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.serializer.SerializerFeature;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.reins.bookstore.constant.Constant;
import com.reins.bookstore.entity.Book;
import com.reins.bookstore.entity.OrderInfo;
import com.reins.bookstore.service.BookService;
import com.reins.bookstore.utils.msgutils.Message;
import com.reins.bookstore.utils.msgutils.MessageUtil;
import com.reins.bookstore.utils.sessionutils.SessionUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Map;

/**
 * @ClassName BookController
 * @Description TODO
 * @Author thunderBoy
 * @Date 2019/11/6 16:07
 */
@RestController
public class BookController {

    @Autowired
    private BookService bookService;

    /*@RequestMapping("/getBooks")
    public List<Book> getBooks(@RequestParam Map<String, String> params) {
        return bookService.getBooks();
    }
*/
    @RequestMapping("/getBooks")
    public List<Book> getBooks() { return bookService.getBooks(); }

    @RequestMapping("/getBooksRankedBySales")
    public List<Book> getBooksRankedBySales() { return bookService.getBooksRankedBySales(); }

    @RequestMapping("/getBook")
    public Book getBook(@RequestParam("id") Integer id){
        return bookService.findBookById(id);
    }

    @RequestMapping("/getSingleOrderBook")
    public List<Book> getSingleOrderBook(@RequestParam("bookId") Integer bookId) {
        System.out.println("conTroller");
        return bookService.getSingleOrderBook(bookId);
    }

    @RequestMapping("/deleteBooks")
    public Message deleteBooks(@RequestBody ArrayList<Integer> bookIdList) {
        Integer userType = SessionUtil.getUserType();
        if (userType != null && userType.equals(Constant.MANAGER)) {
            if (bookService.deleteBooks(bookIdList))
                return MessageUtil.createMessage(MessageUtil.DELETE_SUCCESS_CODE, MessageUtil.DELETE_SUCCESS_MSG);
            else
                return MessageUtil.createMessage(MessageUtil.DELETE_FAIL_CODE, MessageUtil.DELETE_FAIL_MSG);
        }
        return MessageUtil.createMessage(MessageUtil.HAVE_NO_AUTHORITY_CODE, MessageUtil.HAVE_NO_AUTHORITY_MSG);
    }

    @RequestMapping("/undercarriage")
    public Message undercarriage(@RequestBody ArrayList<Integer> bookIdList) {
        Integer userType = SessionUtil.getUserType();
        if (userType != null && userType.equals(Constant.MANAGER)) {
            System.out.println(bookIdList.toString());
            if (bookService.undercarriage(bookIdList))
                return MessageUtil.createMessage(MessageUtil.UNDERCARRIAGE_SUCCESS_CODE, MessageUtil.UNDERCARRIAGE_SUCCESS_MSG);
            else
                return MessageUtil.createMessage(MessageUtil.UNDERCARRIAGE_FAIL_CODE, MessageUtil.UNDERCARRIAGE_FAIL_MSG);
        }
        return MessageUtil.createMessage(MessageUtil.HAVE_NO_AUTHORITY_CODE, MessageUtil.HAVE_NO_AUTHORITY_MSG);
    }

    @RequestMapping("/putOnSale")
    public Message putOnSale(@RequestBody ArrayList<Integer> bookIdList) {
        Integer userType = SessionUtil.getUserType();
        if (userType != null && userType.equals(Constant.MANAGER)) {
            System.out.println(bookIdList.toString());
            if (bookService.putOnSale(bookIdList))
                return MessageUtil.createMessage(MessageUtil.PUT_ON_SALE_SUCCESS_CODE, MessageUtil.PUT_ON_SALE_SUCCESS_MSG);
            else
                return MessageUtil.createMessage(MessageUtil.PUT_ON_SALE_FAIL_CODE, MessageUtil.PUT_ON_SALE_FAIL_MSG);
        }
        return MessageUtil.createMessage(MessageUtil.HAVE_NO_AUTHORITY_CODE, MessageUtil.HAVE_NO_AUTHORITY_MSG);
    }


    @RequestMapping("/modifyBook")
    public void modifyBook(@RequestBody Map<String, String> bookInfo) {
        System.out.println(bookInfo);
        bookService.modifyBook(bookInfo);
    }

    @RequestMapping("/getBooksByKeyword")
    public List<Book> getBooksByKeyword(@RequestParam("keyword") String keyword)
    {

        return bookService.getBooksByKeyword(keyword);
    }

    @RequestMapping("/getBooksRankedBySalesByTime")
    @JsonFormat(pattern = "yyyy-MM-dd")
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    public List<Book> getBooksRankedBySalesByTime(@RequestBody ArrayList<Date> time)
    {
        return bookService.getBooksRankedBySalesByTime(time);
    }

    @RequestMapping("/getConsumption")
    public List<Book> getConsumption()
    { return bookService.getConsumption(); }


    @RequestMapping("/getConsumptionByTime")
    @JsonFormat(pattern = "yyyy-MM-dd")
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    public List<Book> getConsumptionByTime(@RequestBody ArrayList<Date> time)
    {
        return bookService.getConsumptionByTime(time);
    }
}
