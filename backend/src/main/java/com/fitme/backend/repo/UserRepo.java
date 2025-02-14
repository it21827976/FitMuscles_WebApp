package com.fitme.backend.repo;

import com.fitme.backend.Entity.User; // Ensure correct import
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository // Ensure correct annotation
public interface UserRepo extends JpaRepository<User, Integer> {

    Optional<User> findOneByEmailAndPassword(String email, String password); // Add both email and password in method signature

    User findByEmail(String email); // Consistent method name
}
