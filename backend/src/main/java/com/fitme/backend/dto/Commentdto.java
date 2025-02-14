package com.fitme.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class Commentdto {

    private int id;

    private int pid;
    private String usName;
    private String comment;

}
