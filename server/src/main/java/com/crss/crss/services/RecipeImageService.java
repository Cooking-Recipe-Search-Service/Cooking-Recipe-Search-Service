package com.crss.crss.services;

import com.crss.crss.repositories.FileSystemRepository;
import java.util.Base64;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor(onConstructor_ = {@Autowired})
public class RecipeImageService {

    private final FileSystemRepository fileSystemRepository;

    public String getRecipeImageBase64ById(Long id) {
        return Base64.getEncoder().encodeToString(fileSystemRepository
            .findRecipeImageInFileSystem(id));
    }
}
