package com.crss.crss.services;

import com.crss.crss.dto.RecipeDtoIn;
import com.crss.crss.entities.EnergyValuePerIngredientEntity;
import com.crss.crss.entities.EnergyValuePerPortionEntity;
import com.crss.crss.entities.IngredientEntity;
import com.crss.crss.entities.RecipeDescriptionEntity;
import com.crss.crss.entities.RecipeEntity;
import com.crss.crss.entities.RecipeIngredient;
import com.crss.crss.entities.RecipeInstructionEntity;
import com.crss.crss.entities.UserEntity;
import com.crss.crss.exceptions.CrssException;
import com.crss.crss.repositories.DescriptionRepository;
import com.crss.crss.repositories.EnergyValuePerIngredientRepository;
import com.crss.crss.repositories.EnergyValuePerPortionRepository;
import com.crss.crss.repositories.FileSystemRepository;
import com.crss.crss.repositories.InstructionRepository;
import com.crss.crss.repositories.RecipeRepository;
import com.querydsl.core.BooleanBuilder;
import com.querydsl.core.types.Predicate;
import java.util.Base64;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import javax.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor(onConstructor_ = {@Autowired})
public class RecipeService {

    private final FileSystemRepository fileSystemRepository;
    private final RecipeRepository recipeRepository;
    private final DescriptionRepository descriptionRepository;
    private final EnergyValuePerPortionRepository energyValueRepository;
    private final InstructionRepository instructionRepository;
    private final IngredientService ingredientService;
    private final CategoryService categoryService;
    private final CountryService countryService;


    public List<RecipeEntity> getAllRecipes() {
        return recipeRepository.findAll();
    }

    public RecipeEntity createRecipe(RecipeDtoIn dto) {
        RecipeEntity recipe = new RecipeEntity(dto);
        recipe.setIngredients(dto.getIngredients().stream()
            .map(ingredient -> new RecipeIngredient(recipe, ingredientService.getIngredientById(ingredient.getId()), ingredient.getValue()))
            .collect(Collectors.toList()));
        recipe.setCategory(categoryService.getCategoryById(dto.getCategoryId()));
        recipe.setCountry(countryService.getCountryById(dto.getCountryId()));
        RecipeEntity savedRecipe = recipeRepository.save(recipe);
        descriptionRepository.save(new RecipeDescriptionEntity(dto.getDescription(), savedRecipe));
        instructionRepository.save(new RecipeInstructionEntity(dto.getInstructions(), savedRecipe));
        return savedRecipe;
    }

    public List<RecipeEntity> searchRecipe(Predicate predicate) {
        if (predicate == null || (BooleanBuilder.class.isAssignableFrom(predicate.getClass())
            && !((BooleanBuilder) predicate).hasValue())) {
            throw new CrssException(HttpStatus.BAD_REQUEST, "Error predicate format");
        } else {
            return (List<RecipeEntity>) recipeRepository.findAll(predicate);
        }
    }

    public RecipeEntity getRecipeById(Long id) {
        return recipeRepository.findById(id).orElseThrow(() -> new CrssException(HttpStatus.NOT_FOUND, "Cannot find recipe with id=" + id));
    }


    public String getRecipeImageBase64ById(String name) {
        return Base64.getEncoder().encodeToString(fileSystemRepository
            .findRecipeImageInFileSystem(name));
    }

    public Optional<RecipeDescriptionEntity> getRecipeDescriptionById(Long id) {
        return descriptionRepository.findById(id);
    }

    public Optional<RecipeInstructionEntity> getRecipeInstructionById(Long id) {
        return instructionRepository.findById(id);
    }

    public EnergyValuePerPortionEntity getOrCreateEnergyValuePerPortionEntity(RecipeEntity recipe) {
        return energyValueRepository.findById(recipe.getId()).orElseGet(() -> createEnergyValuePerPortionEntity(recipe));
    }

    private EnergyValuePerPortionEntity createEnergyValuePerPortionEntity(RecipeEntity recipe) {
        EnergyValuePerPortionEntity energyValuePerPortion = new EnergyValuePerPortionEntity();
        List<EnergyValuePerIngredientEntity> energyValuePerIngredients = ingredientService.getEnergyValuesByIds(
            recipe.getIngredients().stream().map(RecipeIngredient::getIngredient)
                .map(IngredientEntity::getId).collect(Collectors.toList()));
        for (EnergyValuePerIngredientEntity energyValuePerIngredientEntity : energyValuePerIngredients) {
            energyValuePerPortion.add(energyValuePerIngredientEntity);
        }
        energyValuePerPortion.countForPortions(recipe.getPortionQuantity());
        energyValuePerPortion.setRecipe(recipe);
        return energyValueRepository.save(energyValuePerPortion);
    }

    public RecipeEntity addUserToLovers(Long recipeId, UserEntity userEntity) {
        RecipeEntity recipeEntity = getRecipeById(recipeId);
        recipeEntity.addLover(userEntity);
        return recipeRepository.save(recipeEntity);
    }

    public RecipeEntity deleteUserToLovers(Long recipeId, UserEntity userEntity) {
        RecipeEntity recipeEntity = getRecipeById(recipeId);
        recipeEntity.deleteLover(userEntity);
        return recipeRepository.save(recipeEntity);
    }

}
