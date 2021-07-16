package com.reins.bookstore.controller;

import com.reins.bookstore.entity.Book;
import com.reins.bookstore.service.BookService;
import com.reins.bookstore.service.FileService;
import com.reins.bookstore.utils.msgutils.Message;
import com.reins.bookstore.utils.msgutils.MessageUtil;
import com.reins.bookstore.utils.processor.CsvFileProcessor;
import com.reins.bookstore.utils.processor.FileProcessor;
import net.sf.json.JSONArray;
import net.sf.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@RestController
public class FileController {

    CsvFileProcessor csvFileProcessor;

    FileService fileService;

    BookService bookService;

    @Autowired
    void setCsvFileProcessor(CsvFileProcessor csvFileProcessor) {
        this.csvFileProcessor = csvFileProcessor;
    }

    @Autowired
    void setFileService(FileService fileService) {
        this.fileService = fileService;
    }

    @Autowired
    void setBookService(BookService bookService) {
        this.bookService = bookService;
    }

    @RequestMapping("/upload")
    void preHandleFile(@RequestParam("file") MultipartFile file) throws IOException {
        String filename = file.getOriginalFilename();
        System.out.println("Filename: " + filename);
        FileProcessor.createFileProcessor()
                .addFilters(new String[]{"pdf", "jpg", "png", "txt", "csv", "doc", "docx"})
                .addUploadFile(file)
                .saveUploadFileTo("upload/File");
    }

    @RequestMapping("/bookUpload")
    Message handleBookUpload(@RequestParam("file") MultipartFile file) throws IOException {

        String filename = file.getOriginalFilename();
        System.out.println("Filename: " + filename);
        JSONArray result = csvFileProcessor.parseContent(csvFileProcessor.readContent(file));
        List<Book> newBooks = new ArrayList<>();
        List<Book> existingBooks = bookService.getBooks();
        Integer bookSum = existingBooks.size();
        for (int i = 0; i < result.size(); i++) {
            JSONObject jo = result.getJSONObject(i);
            Book u = new Book();
            u.setBookId(bookSum + i + 1);
            u.setTitle(jo.getString("书名"));
            u.setAuthor(jo.getString("作者"));
            u.setAvailable(1);
            u.setDescription(jo.getString("简介"));
            u.setInventory(Integer.parseInt(jo.getString("库存")));
            u.setIsbn(jo.getString("ISBN"));
            u.setSales(0);
            u.setPrice(Integer.parseInt(jo.getString("价格")));
            u.setImage1(jo.getString("小图"));
            u.setImage2(jo.getString("大图"));
            u.setType(jo.getString("类型"));
            newBooks.add(u);
        }
        boolean success = fileService.bookUpload(newBooks);
        if(success)
            return MessageUtil.createMessage(MessageUtil.UPLOAD_SUCCESS_CODE, MessageUtil.UPLOAD_SUCCESS_MSG);
        else
            return MessageUtil.createMessage(MessageUtil.WRONG_FILE_FORMAT_CODE, MessageUtil.WRONG_FILE_FORMAT_MSG);


    }




}
