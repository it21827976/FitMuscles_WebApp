package com.fitme.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class Workopdto {

    private int id;
    private int userid;
    private String exerciseName;
    private String sets;
    private String reps;
    private String link;

}
