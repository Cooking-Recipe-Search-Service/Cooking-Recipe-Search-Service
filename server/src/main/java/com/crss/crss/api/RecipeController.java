package com.crss.crss.api;

import com.crss.crss.dto.RecipeDto;
import com.crss.crss.dto.RecipeSlimDto;
import com.crss.crss.mapper.DtoConverter;
import com.crss.crss.services.RecipeService;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/recipes")
@RequiredArgsConstructor(onConstructor_ = {@Autowired})
public class RecipeController {

    private final DtoConverter dtoConverter;
    private final RecipeService recipeService;

    @GetMapping
    public List<RecipeSlimDto> getRecipes() {
        return dtoConverter.getRecipeSlimDtoList(recipeService.getAllRecipes());
    }

    @GetMapping("/{id}")
    public RecipeDto getRecipe(@PathVariable Long id) {
        return dtoConverter.getRecipeDto(recipeService.getRecipeById(id));
    }

}
