package com.fitme.backend.dto;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class Likedto {

    private int id;
    private int pid;
    private int likes;

}
