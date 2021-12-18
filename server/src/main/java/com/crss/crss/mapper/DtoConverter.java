package com.crss.crss.mapper;

import com.crss.crss.dto.IngredientForRecipeDto;
import com.crss.crss.dto.RecipeSlimDto;
import com.crss.crss.entities.RecipeEntity;
import com.crss.crss.services.RecipeImageService;
import java.util.List;
import java.util.stream.Collectors;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Slf4j
@Component
@RequiredArgsConstructor(onConstructor_ = {@Autowired})
public class DtoConverter {

    private final ModelMapper modelMapper;
    private final RecipeImageService recipeImageService;

    public <T> T simpleConvert(Object obj, Class<T> clazz) {
        return modelMapper.map(obj, clazz);
    }

    public <T> List<T> simpleConvert(List<?> entitiesList, Class<T> clazz) {
        return entitiesList.stream().map(x -> simpleConvert(x, clazz)).collect(Collectors.toList());
    }

    public List<RecipeSlimDto> getRecipeSlimDtoList(List<RecipeEntity> recipeEntities) {
        return recipeEntities.stream().map(this::getRecipeSlimDto).collect(Collectors.toList());
    }

    public RecipeSlimDto getRecipeSlimDto(RecipeEntity recipe) {
        RecipeSlimDto recipeSlimDto = simpleConvert(recipe, RecipeSlimDto.class);
        recipeSlimDto.setIngredientsInfo(getIngredientForRecipeDtoByRecipe(recipe));
        recipeSlimDto.setImage(recipeImageService.getRecipeImageBase64ById(recipe.getId()));
        return recipeSlimDto;
    }

    public List<IngredientForRecipeDto> getIngredientForRecipeDtoByRecipe(RecipeEntity recipe) {
        return recipe.getIngredients().stream().map(
            recipeIngredient -> new IngredientForRecipeDto(recipeIngredient.getIngredient().getId(),
                recipeIngredient.getIngredient().getName(), recipeIngredient.getIngredient().getMeasurementValue(),
                recipeIngredient.getValue())).collect(Collectors.toList());
    }
}
