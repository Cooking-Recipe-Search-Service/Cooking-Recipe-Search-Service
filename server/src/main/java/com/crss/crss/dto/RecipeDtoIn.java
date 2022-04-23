package com.crss.crss.dto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import java.util.ArrayList;
import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@JsonIgnoreProperties(ignoreUnknown = true)
public class RecipeDtoIn {

    private String name;
    private Integer cookingTime;
    private Integer portionQuantity;
    private Long countryId;
    private Long categoryId;
    private List<IngredientsForRecipeDtoIn> ingredients = new ArrayList<>();
    private String description;
    private List<InstructionDto> instructions = new ArrayList<>();

    @Data
    @AllArgsConstructor
    @NoArgsConstructor
    @JsonIgnoreProperties(ignoreUnknown = true)
    public static class InstructionDto {

        private Integer itemNumber;
        private String instruction;
    }

    @Data
    @AllArgsConstructor
    @NoArgsConstructor
    @JsonIgnoreProperties(ignoreUnknown = true)
    public static class IngredientsForRecipeDtoIn {

        private Long id;
        private Integer value;
    }
}