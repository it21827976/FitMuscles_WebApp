package com.fitme.backend.repo;

import com.fitme.backend.Entity.Videos;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface VideoRepository extends JpaRepository<Videos, Integer> {
}
