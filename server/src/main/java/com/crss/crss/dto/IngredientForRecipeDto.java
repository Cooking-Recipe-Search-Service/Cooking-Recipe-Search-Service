package com.crss.crss.dto;

import com.crss.crss.dto.IngredientDto.EnergyValueDto;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@JsonIgnoreProperties(ignoreUnknown = true)
@AllArgsConstructor
public class IngredientForRecipeDto {

    private long id;
    private String name;
    private String measurementValue;
    private Integer value;
    private EnergyValueDto energyValue;
}
