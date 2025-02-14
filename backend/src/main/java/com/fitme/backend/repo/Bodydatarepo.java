package com.fitme.backend.repo;

import com.fitme.backend.Entity.BodyData;
import org.springframework.data.jpa.repository.JpaRepository;

public interface Bodydatarepo extends JpaRepository<BodyData, Integer> {
}
