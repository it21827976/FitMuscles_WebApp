package com.fitme.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


public class ControllerException extends RuntimeException{
    private String errorCode ;
    private String errorMessage ;


    public ControllerException(String number, String emptyDatabaseIsFound) {
    }
}
