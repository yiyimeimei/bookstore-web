package com.reins.bookstore.dao;

import com.reins.bookstore.entity.Book;

import java.util.List;

public interface FileDao {
    boolean bookUpload(List<Book> newBooks);
}
