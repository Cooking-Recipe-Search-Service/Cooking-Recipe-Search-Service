package com.crss.crss.services;

import com.crss.crss.dto.IngredientDtoIn;
import com.crss.crss.entities.EnergyValuePerIngredientEntity;
import com.crss.crss.entities.IngredientEntity;
import com.crss.crss.entities.RecipeInstructionEntity;
import com.crss.crss.exceptions.CrssException;
import com.crss.crss.repositories.EnergyValuePerIngredientRepository;
import com.crss.crss.repositories.IngredientRepository;
import java.util.List;
import java.util.Optional;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor(onConstructor_ = {@Autowired})
public class IngredientService {

    private final IngredientRepository ingredientRepository;
    private final EnergyValuePerIngredientRepository energyValueRepository;

    public List<IngredientEntity> getAllIngredients() {
        return ingredientRepository.findAll();
    }


    public IngredientEntity createIngredient(IngredientDtoIn dto) {
        IngredientEntity ingredient = ingredientRepository.save(new IngredientEntity(dto));
        energyValueRepository.save(new EnergyValuePerIngredientEntity(ingredient, dto.getEnergyValue()));
        return ingredient;
    }

    public void deleteIngredientById(Long id) {
        ingredientRepository.deleteById(id);
    }

    public IngredientEntity getIngredientById(Long id) {
        return ingredientRepository.findById(id)
            .orElseThrow(() -> new CrssException(HttpStatus.NOT_FOUND, "Cannot find ingredient with id=" + id));
    }

    public Optional<EnergyValuePerIngredientEntity> getEnergyValueById(Long id) {
        return energyValueRepository.findById(id);
    }

    public List<EnergyValuePerIngredientEntity> getEnergyValuesByIds(List<Long> ids) {
        return energyValueRepository.findAllById(ids);
    }


}
