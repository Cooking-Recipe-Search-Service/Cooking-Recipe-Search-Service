package com.crss.crss.dto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@JsonIgnoreProperties(ignoreUnknown = true)
public class IngredientForRecipeDto {

    private long id;
    private String name;
    private String measurementValue;
    private Integer value;

    public IngredientForRecipeDto(long id, String name, String measurementValue, Integer value) {
        this.id = id;
        this.name = name;
        this.measurementValue = measurementValue;
        this.value = value;
    }
}
