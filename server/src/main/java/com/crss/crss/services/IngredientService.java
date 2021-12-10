package com.crss.crss.services;

import com.crss.crss.entities.IngredientEntity;
import com.crss.crss.exceptions.CrssException;
import com.crss.crss.repositories.IngredientRepository;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor(onConstructor_ = {@Autowired})
public class IngredientService {

    private final IngredientRepository ingredientRepository;

    public List<IngredientEntity> getAllIngredients() {
        return ingredientRepository.findAll();
    }

    public IngredientEntity getIngredientById(Long id) {
        return ingredientRepository.findById(id)
            .orElseThrow(() -> new CrssException(HttpStatus.NOT_FOUND, "Cannot find ingredient with id=" + id));
    }

}
