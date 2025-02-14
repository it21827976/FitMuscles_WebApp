//MealDTO

package com.fitme.backend.dto;

import jakarta.persistence.Column;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class MealDTO {
    private Long id;
    private int userid;
    private String mealCategory;
    private String mealName;
    private String mealDescription;
    private String mealTime;
    private String size;
    private String calories;
    private String instruction;
}
