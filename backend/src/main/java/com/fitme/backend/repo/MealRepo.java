//MealRepo

package com.fitme.backend.repo;

import com.fitme.backend.Entity.Meal;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import java.util.Optional;

public interface MealRepo extends JpaRepository<Meal, Long> {
    @Query(value = "SELECT * FROM MEAL WHERE id = ?1", nativeQuery = true)
    Optional<Meal> findById(Long id);

    @Query(value = "SELECT * FROM MEAL WHERE id = ?1 AND meal_name = ?2", nativeQuery = true)
    Optional<Meal> findByIdAndMealName(Long id, String mealName);
}
