package com.fitme.backend.repo;

import com.fitme.backend.Entity.CommentData;
import org.springframework.data.jpa.repository.JpaRepository;

public interface Commentrepo extends JpaRepository<CommentData, Integer>{
}
