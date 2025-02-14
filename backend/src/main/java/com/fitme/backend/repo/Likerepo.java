package com.fitme.backend.repo;

import com.fitme.backend.Entity.LikeData;
import org.springframework.data.jpa.repository.JpaRepository;

public interface Likerepo extends JpaRepository<LikeData, Integer>{
}
