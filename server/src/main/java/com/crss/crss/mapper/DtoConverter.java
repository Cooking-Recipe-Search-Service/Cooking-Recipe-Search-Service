package com.crss.crss.mapper;

import com.crss.crss.dto.CountryDto;
import com.crss.crss.dto.IngredientDto;
import com.crss.crss.dto.IngredientDto.EnergyValueDto;
import com.crss.crss.dto.IngredientForRecipeDto;
import com.crss.crss.dto.RecipeDto;
import com.crss.crss.dto.RecipeDto.InstructionDto;
import com.crss.crss.dto.RecipeSlimDto;
import com.crss.crss.entities.CountryEntity;
import com.crss.crss.entities.IngredientEntity;
import com.crss.crss.entities.RecipeDescriptionEntity;
import com.crss.crss.entities.RecipeEntity;
import com.crss.crss.services.CountryService;
import com.crss.crss.services.IngredientService;
import com.crss.crss.services.RecipeService;
import java.util.ArrayList;
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
    private final RecipeService recipeService;
    private final IngredientService ingredientService;
    private final CountryService countryService;

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
        recipeSlimDto.setImage(recipeService.getRecipeImageBase64ById(recipe.getName()));
        return recipeSlimDto;
    }

    public RecipeDto getRecipeDto(RecipeEntity recipe) {
        RecipeDto recipeDto = simpleConvert(recipe, RecipeDto.class);
        recipeDto.setIngredientsInfo(getIngredientForRecipeDtoByRecipe(recipe));
        recipeDto.setImage(recipeService.getRecipeImageBase64ById(recipe.getName()));
        recipeDto.setDescription(
            recipeService.getRecipeDescriptionById(recipe.getId()).map(RecipeDescriptionEntity::getDescription).orElse(""));
        recipeDto.setInstructions(recipeService.getRecipeInstructionById(recipe.getId()).map(x -> convertInstruction(x.getInstruction()))
            .orElse(new ArrayList<>()));
        recipeDto.setEnergyValue(simpleConvert(recipeService.getOrCreateEnergyValuePerPortionEntity(recipe), EnergyValueDto.class));
        return recipeDto;
    }

    public List<IngredientForRecipeDto> getIngredientForRecipeDtoByRecipe(RecipeEntity recipe) {
        return recipe.getIngredients().stream().map(
            recipeIngredient -> new IngredientForRecipeDto(recipeIngredient.getIngredient().getId(),
                recipeIngredient.getIngredient().getName(), recipeIngredient.getIngredient().getMeasurementValueType().getString(),
                recipeIngredient.getValue(), convertEnergyValue(recipeIngredient.getIngredient()))).collect(Collectors.toList());
    }


    public List<CountryDto> getCountryDtoList(List<CountryEntity> countryEntities) {
        List<CountryDto> countryDtoList = simpleConvert(countryEntities, CountryDto.class);
        for (CountryDto countryDto : countryDtoList) {
            countryDto.setImage(countryService.getCountryImageBase64ById(countryDto.getName()));
        }
        return countryDtoList;
    }

    private List<InstructionDto> convertInstruction(String instruction) {
        String[] instructions = instruction.split(";");
        List<InstructionDto> instructionDtos = new ArrayList<>();
        for (int i = 0; i < instructions.length; i = i + 2) {
            instructionDtos.add(new InstructionDto(Integer.valueOf(instructions[i].trim()), instructions[i + 1]));
        }
        return instructionDtos;
    }

    public IngredientDto getIngredientDto(IngredientEntity ingredient) {
        IngredientDto ingredientDto = simpleConvert(ingredient, IngredientDto.class);
        ingredientDto.setEnergyValue(convertEnergyValue(ingredient));
        return ingredientDto;
    }

    private EnergyValueDto convertEnergyValue(IngredientEntity ingredient) {
        return ingredientService.getEnergyValueById(ingredient.getId()).map(x -> simpleConvert(x, EnergyValueDto.class))
            .orElse(new EnergyValueDto());
    }
}
