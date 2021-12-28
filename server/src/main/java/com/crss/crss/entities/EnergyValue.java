package com.crss.crss.entities;

import javax.persistence.Column;
import javax.persistence.MappedSuperclass;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
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
}
