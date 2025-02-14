//MealService

package com.fitme.backend.service;

import com.fitme.backend.Entity.Meal;
import com.fitme.backend.Entity.WorkopData;
import com.fitme.backend.dto.MealDTO;
import com.fitme.backend.repo.MealRepo;
import jakarta.transaction.Transactional;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@Transactional
public class MealService {
    @Autowired
    private MealRepo mealRepo;

    @Autowired
    private ModelMapper modelMapper;

    public MealDTO saveMeal(MealDTO mealDTO){
        mealRepo.save(modelMapper.map(mealDTO, Meal.class));
        return mealDTO;
    }
    public List<MealDTO> getAllMeals(){
        List<Meal>mealList=mealRepo.findAll();
        return modelMapper.map(mealList, new TypeToken<List<MealDTO>>(){}.getType());
    }
    public MealDTO updateMeal(MealDTO mealDTO){
        mealRepo.save(modelMapper.map(mealDTO, Meal.class));
        return mealDTO;
    }
    public boolean deleteMeal(MealDTO mealDTO){
        mealRepo.delete(modelMapper.map(mealDTO, Meal.class));
        return true;
    }

    //user id > user details
    //select * from user where id = 2
    public MealDTO getMealByMealID(Long id) {
        Meal meal = mealRepo.findById(id).orElse(null);
        return modelMapper.map(meal, MealDTO.class);
    }

    public MealDTO getMealByMealIDAndMealName(Long id, String mealName) {
        Optional<Meal> meal = mealRepo.findByIdAndMealName(id, mealName);
        if (meal.isPresent()) {
            return modelMapper.map(meal.get(), MealDTO.class);
        } else {
            return null; // or throw an appropriate exception, or return an Optional<MealDTO>
        }
    }

    // Add these methods to the existing MealService class
    public boolean deleteMealByID(Long id) {
        Optional<Meal> mealOptional = mealRepo.findById(id);
        if (mealOptional.isPresent()) {
            mealRepo.delete(mealOptional.get());
            return true;
        }
        return false;  // You could also throw an exception here
    }

    public MealDTO updateMealByID(Long id, MealDTO mealDTO) {
        Optional<Meal> mealOptional = mealRepo.findById(id);
        if (mealOptional.isPresent()) {
            Meal meal = mealOptional.get();
            // Update the existing Meal entity with the new data
            meal.setMealCategory(mealDTO.getMealCategory());
            meal.setMealName(mealDTO.getMealName());
            meal.setMealDescription(mealDTO.getMealDescription());
            meal.setMealTime(mealDTO.getMealTime());
            meal.setSize(mealDTO.getSize());
            meal.setCalories(mealDTO.getCalories());
            meal.setInstruction(mealDTO.getInstruction());

            mealRepo.save(meal);  // Save the updated entity
            return modelMapper.map(meal, MealDTO.class);
        }
        return null;  // You could also throw an exception here
    }

    public List<MealDTO> getOneAll(int userid) {
        // Fetch all meals and filter by userid
        List<Meal> meals = mealRepo.findAll()
                .stream()
                .filter(meal -> meal.getUserid() == userid) // Corrected filtering logic
                .collect(Collectors.toList());

        // Corrected mapping logic
        return meals.stream()
                .map(meal -> modelMapper.map(meal, MealDTO.class))
                .collect(Collectors.toList());
    }


}
