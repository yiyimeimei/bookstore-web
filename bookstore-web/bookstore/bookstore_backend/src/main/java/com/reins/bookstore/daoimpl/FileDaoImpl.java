package com.reins.bookstore.daoimpl;

import com.reins.bookstore.dao.FileDao;
import com.reins.bookstore.entity.Book;
import com.reins.bookstore.repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.Iterator;
import java.util.List;

@Repository
public class FileDaoImpl implements FileDao {
    BookRepository bookRepository;

    @Autowired
    void setUserRepository(BookRepository bookRepository){
        this.bookRepository=bookRepository;
    }


    @Override
    @Transactional
    public boolean bookUpload(List<Book> newBooks)
    {

        Iterator<Book> it = newBooks.iterator();
        if(!it.hasNext())
            return false;
        while (it.hasNext())
        {
            Book p = (Book) it.next();
            //Integer bookId = p.getBookId();
            System.out.println(p);
            Book temp1 = bookRepository.getBookByIsbn(p.getIsbn());
            if (temp1 != null)
                bookRepository.modifyBookWithIsbn(p.getIsbn(),p.getTitle(), p.getAuthor(),p.getType(),p.getPrice(),p.getDescription(),p.getInventory(),p.getSales(),p.getImage1(),p.getImage2(),p.getAvailable());
            else
                bookRepository.save(p);
        }
        return true;
    }




}
