package com.reins.bookstore.entity;


import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;
import org.hibernate.annotations.GenericGenerator;
import org.hibernate.annotations.Proxy;

import javax.persistence.*;
/*
@Proxy(lazy = false)*/
@Data
@Entity
@Table(name = "cart")
@JsonIgnoreProperties(value = {"handler", "hibernateLazyInitializer", "fieldHandler"})
public class Cart {

    @Id
    @GeneratedValue(generator = "increment")
    @GenericGenerator(name = "increment", strategy = "increment")
    private Integer cartId;
    private Integer bookNumber;
    private Integer bookId;
    private Integer userId;

    @MapsId("bookId")
    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "bookId")
    Book book;



}
