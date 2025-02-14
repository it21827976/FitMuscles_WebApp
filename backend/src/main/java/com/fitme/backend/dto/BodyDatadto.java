package com.fitme.backend.dto;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@NoArgsConstructor
@AllArgsConstructor
@Data
public class BodyDatadto {

    private int userid;
    private String height;
    private String weight;
    private String weekworkout;
    private String dayhours;

}
