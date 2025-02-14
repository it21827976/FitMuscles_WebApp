package com.fitme.backend.Config;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class UpdateModel {
    private int id ;
    private String tags ;
    private String description ;
    private String title ;
}
