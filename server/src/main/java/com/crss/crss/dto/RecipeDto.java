package com.crss.crss.dto;

import com.crss.crss.dto.IngredientDto.EnergyValueDto;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import java.util.ArrayList;
import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@JsonIgnoreProperties(ignoreUnknown = true)
public class RecipeDto {

    private long id;
    private String name;
    private Integer cookingTime;
    private Integer portionQuantity;
    private String countryName;
    private String categoryName;
    private List<IngredientForRecipeDto> ingredientsInfo;
    private String description;
    private List<InstructionDto> instructions = new ArrayList<>();
    private String image;
    private EnergyValueDto energyValue;

    @Data
    @AllArgsConstructor
    @NoArgsConstructor
    @JsonIgnoreProperties(ignoreUnknown = true)
    public static class InstructionDto {

        private Integer itemNumber;
        private String instruction;
    }
}