package com.crss.crss.dto;

import com.crss.crss.dto.IngredientDto.EnergyValueDto;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import java.util.List;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@JsonIgnoreProperties(ignoreUnknown = true)
public class RecipeSlimDto {

    private long id;
    private String name;
    private Integer cookingTime;
    private Integer portionQuantity;
    private String countryName;
    private String categoryName;
    private List<IngredientForRecipeDto> ingredientsInfo;
    private String image;
    private EnergyValueDto energyValue;
}
