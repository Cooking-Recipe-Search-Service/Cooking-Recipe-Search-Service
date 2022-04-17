package com.crss.crss.entities;

import javax.persistence.Column;
import javax.persistence.MappedSuperclass;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@MappedSuperclass
public abstract class EnergyValue {

    @Column(nullable = false)
    private Integer calories;
    @Column(nullable = false)
    private Integer fats;
    @Column(nullable = false)
    private Integer carbs;
    @Column(nullable = false)
    private Integer proteins;

    public EnergyValue(){
        calories = 0;
        fats = 0;
        carbs = 0;
        proteins = 0;
    }
}
