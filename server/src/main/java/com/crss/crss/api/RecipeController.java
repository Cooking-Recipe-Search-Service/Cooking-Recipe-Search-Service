package com.crss.crss.api;

import com.crss.crss.dto.RecipeDto;
import com.crss.crss.dto.RecipeDtoIn;
import com.crss.crss.dto.RecipeSlimDto;
import com.crss.crss.entities.RecipeEntity;
import com.crss.crss.exceptions.CrssException;
import com.crss.crss.mapper.DtoConverter;
import com.crss.crss.repositories.RecipeRepository;
import com.crss.crss.services.RecipeService;
import com.querydsl.core.BooleanBuilder;
import com.querydsl.core.types.Predicate;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.enums.ParameterIn;
import io.swagger.v3.oas.annotations.media.Schema;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.querydsl.binding.QuerydslPredicate;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RepositoryRestResource(collectionResourceRel = "recipes", path = "/api/recipes")
@RequestMapping("/api/recipes")
@RequiredArgsConstructor(onConstructor_ = {@Autowired})
public class RecipeController {

    private final DtoConverter dtoConverter;
    private final RecipeService recipeService;
    private final RecipeRepository recipeRepository;

    @GetMapping
    public List<RecipeSlimDto> getRecipes() {
        return dtoConverter.getRecipeSlimDtoList(recipeService.getAllRecipes());
    }

    @GetMapping("/{id}")
    public RecipeDto getRecipe(@PathVariable Long id) {
        return dtoConverter.getRecipeDto(recipeService.getRecipeById(id));
    }

    @PostMapping
    public RecipeDto createRecipe(@RequestBody RecipeDtoIn dto) {
        return dtoConverter.getRecipeDto(recipeService.createRecipe(dto));
    }

    @DeleteMapping("/{id}")
    public void deleteRecipe(@PathVariable Long id) {
        recipeService.deleteRecipeById(id);
    }

    @RequestMapping(method = {RequestMethod.GET}, path = {"/search"}, produces = {MediaType.APPLICATION_JSON_VALUE})
    @Parameter(in = ParameterIn.QUERY, name = "id", schema = @Schema(type = "int"))
    @Parameter(in = ParameterIn.QUERY, name = "name", schema = @Schema(type = "string"))
    @Parameter(in = ParameterIn.QUERY, name = "cookingTime", schema = @Schema(type = "int"))
    @Parameter(in = ParameterIn.QUERY, name = "portionQuantity", schema = @Schema(type = "int"))
    @Parameter(in = ParameterIn.QUERY, name = "ingredients.ingredient.id", schema = @Schema(type = "int"))
    @Parameter(in = ParameterIn.QUERY, name = "ingredients.ingredient.name", schema = @Schema(type = "string"))
    @Parameter(in = ParameterIn.QUERY, name = "ingredients.value", schema = @Schema(type = "int"))
    @Parameter(in = ParameterIn.QUERY, name = "country.id", schema = @Schema(type = "int"))
    @Parameter(in = ParameterIn.QUERY, name = "country.name", schema = @Schema(type = "string"))
    @Parameter(in = ParameterIn.QUERY, name = "category.id", schema = @Schema(type = "int"))
    @Parameter(in = ParameterIn.QUERY, name = "category.name", schema = @Schema(type = "string"))
    public List<RecipeSlimDto> findAllByWebQuerydsl(@Parameter(hidden = true) @QuerydslPredicate(root = RecipeEntity.class) Predicate predicate) {
        return dtoConverter.getRecipeSlimDtoList(recipeService.searchRecipe(predicate));
    }


}
