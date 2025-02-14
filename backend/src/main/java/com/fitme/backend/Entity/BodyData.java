package com.fitme.backend.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
public class BodyData {

    @Id
    private int userid;
    private String height;
    private String weight;
    private String weekworkout;
    private String dayhours;
}
