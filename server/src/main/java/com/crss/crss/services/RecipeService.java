package com.crss.crss.services;

import com.crss.crss.entities.RecipeEntity;
import com.crss.crss.exceptions.CrssException;
import com.crss.crss.repositories.FileSystemRepository;
import com.crss.crss.repositories.RecipeRepository;
import java.util.Base64;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor(onConstructor_ = {@Autowired})
public class RecipeService {

    private final FileSystemRepository fileSystemRepository;
    private final RecipeRepository recipeRepository;

    public List<RecipeEntity> getAllRecipes() {
        return recipeRepository.findAll();
    }

    public RecipeEntity getRecipeById(Long id) {
        return recipeRepository.findById(id).orElseThrow(() -> new CrssException(HttpStatus.NOT_FOUND, "Cannot find recipe with id=" + id));
    }


    public String getRecipeImageBase64ById(Long id) {
        return Base64.getEncoder().encodeToString(fileSystemRepository
            .findRecipeImageInFileSystem(id));
    }

}
