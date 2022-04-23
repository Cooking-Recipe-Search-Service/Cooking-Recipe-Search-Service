package com.crss.crss.entities;

import com.crss.crss.dto.IngredientDtoIn.EnergyValueDto;
import javax.persistence.Column;
import javax.persistence.MappedSuperclass;
import lombok.Data;

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

    public EnergyValue(EnergyValueDto energyValueDto) {
        this.calories = energyValueDto.getCalories();
        this.fats = energyValueDto.getFats();
        this.carbs = energyValueDto.getCarbs();
        this.proteins = energyValueDto.getProteins();
    }
}
