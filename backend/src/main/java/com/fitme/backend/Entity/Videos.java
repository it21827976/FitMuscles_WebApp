package com.fitme.backend.Entity;

import java.util.Date;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name="video")
@Getter @Setter @NoArgsConstructor @AllArgsConstructor
public class Videos {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id ;
    private String title ;
    private String description ;
    private String tags ;
    private String videoName ;
    private Date addedDate ;



}