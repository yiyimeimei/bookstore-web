package com.reins.bookstore.repository;

import com.reins.bookstore.entity.User;
import com.reins.bookstore.entity.UserAuth;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import javax.transaction.Transactional;

@Transactional
public interface UserAuthRepository extends JpaRepository<UserAuth,String>{

    @Query(value = "from UserAuth where username = :username and password = :password")
    UserAuth checkUser(@Param("username") String username, @Param("password") String password);

    @Modifying
    @Query(value = "update UserAuth set userState = 1 where userId = ?1")
    Integer customerEnabled(Integer userId);

    @Modifying
    @Query(value = "update UserAuth set userState = 0 where userId = ?1")
    Integer customerDisabled(Integer userId);

    @Query(value = "from UserAuth where username = :username")
    UserAuth getUserAuthByUsername(@Param("username") String username);

    @Query(value = "from UserAuth where userId = :userId")
    UserAuth getUserAuthByUserId(@Param("userId") Integer userId);

}
