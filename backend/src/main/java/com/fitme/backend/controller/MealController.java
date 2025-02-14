//MealController

package com.fitme.backend.controller;

import com.fitme.backend.Entity.WorkopData;
import com.fitme.backend.dto.MealDTO;
import com.fitme.backend.service.MealService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping (value = "api/v1/meal")
@CrossOrigin
public class MealController {
    @Autowired
    private MealService mealService;

    @GetMapping("/getMeals")
    public List<MealDTO> getMeals(){
        return mealService.getAllMeals();
    }
    @PostMapping("/saveMeal")
    public MealDTO saveMeal(@RequestBody MealDTO mealDTO){
        return mealService.saveMeal(mealDTO);
    }
    @PutMapping("/updateMeal")
    public MealDTO updateMeal(@RequestBody MealDTO mealDTO){
        return mealService.updateMeal(mealDTO);
    }
    @DeleteMapping("/deleteMeal")
    public boolean deleteMeal(@RequestBody MealDTO mealDTO){
        return mealService.deleteMeal(mealDTO);
    }

    @GetMapping("/getMealByMealID/{id}")
    public MealDTO getMealByMealID(@PathVariable Long id){
        return mealService.getMealByMealID(id);
    }

    @GetMapping("/getMealByMealIDAndMealName/{id}/{mealName}")
    public MealDTO getMealByMealIDAndMealName(@PathVariable Long id ,@PathVariable String mealName){
        return mealService.getMealByMealIDAndMealName(id,mealName);
    }

    // Delete meal by ID
    @DeleteMapping("/deleteMealByID/{id}")
    public boolean deleteMealByID(@PathVariable Long id) {
        return mealService.deleteMealByID(id);
    }

    // Update meal by ID
    @PutMapping("/updateMealByID/{id}")
    public MealDTO updateMealByID(@PathVariable Long id, @RequestBody MealDTO mealDTO) {
        return mealService.updateMealByID(id, mealDTO);
    }

    // Retrieve meals by user ID
    @GetMapping("/getonemeal/{userid}")
    public List<MealDTO> getonemeal(@PathVariable int userid){
        return mealService.getOneAll(userid);
    }
}
