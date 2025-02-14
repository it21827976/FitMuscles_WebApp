package com.fitme.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.stereotype.Component;

@Component
@NoArgsConstructor
@AllArgsConstructor
@Setter @Getter
public class ResourceNotFound extends RuntimeException{
    private String errorCode ;
    private String errorMessage ;


}
