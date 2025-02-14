package com.fitme.backend.repo;

import com.fitme.backend.Entity.WorkopData;
import org.springframework.data.jpa.repository.JpaRepository;

public interface Workoprepo extends JpaRepository<WorkopData, Integer> {
}
