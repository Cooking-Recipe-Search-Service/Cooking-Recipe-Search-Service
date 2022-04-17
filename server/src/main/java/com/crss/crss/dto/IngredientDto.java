package com.crss.crss.dto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import javax.persistence.Column;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@JsonIgnoreProperties(ignoreUnknown = true)
public class IngredientDto {

    private Long id;
    private String name;
    private String measurementValue;
    private EnergyValueDto energyValue;

    @Data
    @AllArgsConstructor
    @JsonIgnoreProperties(ignoreUnknown = true)
    public static class EnergyValueDto {

        private Integer calories;
        private Integer fats;
        private Integer carbs;
        private Integer proteins;

        public EnergyValueDto() {
            this.calories = 0;
            this.fats = 0;
            this.carbs = 0;
            this.proteins = 0;
        }
    }
}
