package com.reins.bookstore.service;

import com.reins.bookstore.entity.Book;

import java.util.List;

public interface FileService {
    boolean bookUpload(List<Book> newBooks);
}
