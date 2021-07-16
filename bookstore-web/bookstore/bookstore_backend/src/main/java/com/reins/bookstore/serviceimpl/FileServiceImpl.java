package com.reins.bookstore.serviceimpl;

import com.reins.bookstore.dao.FileDao;
import com.reins.bookstore.entity.Book;
import com.reins.bookstore.service.FileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FileServiceImpl implements FileService {
    FileDao fileDao;

    @Autowired
    void setFileDao(FileDao fileDao){
        this.fileDao=fileDao;
    }

    @Override
    public boolean bookUpload(List<Book> newBooks)
    {
        return fileDao.bookUpload(newBooks);
    }



}
