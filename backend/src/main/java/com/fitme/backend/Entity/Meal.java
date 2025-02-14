//Meal

package com.fitme.backend.Entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "meal")
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Meal {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private int userid;

    @Column(name = "meal_category")
    private String mealCategory;

    @Column(name = "meal_name")
    private String mealName;

    @Column(name = "meal_description")
    private String mealDescription;

    @Column(name = "mealTime")
    private String mealTime;

    @Column(name = "serving_sizes")
    private String size;

    @Column(name = "calories")
    private String calories;

    @Column(name = "instruction")
    private String instruction;
}
