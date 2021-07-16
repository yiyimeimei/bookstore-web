package com.reins.bookstore.repository;

import com.reins.bookstore.entity.Book;
import com.reins.bookstore.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import javax.transaction.Transactional;
import java.util.List;

@Transactional
public interface UserRepository extends JpaRepository<User,String> {

    @Query(value = "from User where userId = :userId")
    User getUserById(@Param("userId") Integer userId);

    @Query(value = "from User")
    List<User> getUsers();

    @Query(value = "from User where userType = 1")
    List<User> getAllCustomers();

    @Modifying
    @Query(value = "update User set userState = 1 where userId = ?1")
    Integer customerEnabled(Integer userId);

    @Modifying
    @Query(value = "update User set userState = 0 where userId = ?1")
    Integer customerDisabled(Integer userId);

    @Modifying
    @Query(value = "update User set consumption = ?2 where userId = ?1")
    void addConsumptionByUserId(Integer userId, Integer consumption);

    @Query(value = "from User order by consumption desc")
    List<User> getUsersRankedByConsumption();
}
