package com.crss.crss.repositories;

import com.crss.crss.exceptions.CrssException;
import java.nio.file.Files;
import java.nio.file.Paths;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Repository;

@Repository
public class FileSystemRepository {

    @Value("${file-system.storage.images.recipe}")
    private String RESOURCES_DIR_RECIPE;

    @Value("${file-system.storage.images.country}")
    private String RESOURCES_DIR_COUNTRY;

    private final String IMAGE_FORMAT = ".jpeg";


    public byte[] findRecipeImageInFileSystem(Long id) {
        return getImageBytes(id, RESOURCES_DIR_RECIPE);
    }

    public byte[] findCountryImageInFileSystem(Long id) {
        return getImageBytes(id, RESOURCES_DIR_COUNTRY);
    }

    private byte[] getImageBytes(Long id, String resourcesDir) {
        String imagePath = resourcesDir + id + IMAGE_FORMAT;
        if (!Files.exists(Paths.get(imagePath))) {
            throw new CrssException(HttpStatus.NOT_FOUND, "Can't find image with id=" + id + " and path=" + imagePath);
        }
        try {
            return Files.readAllBytes(Paths.get(imagePath));
        } catch (Exception e) {
            throw new CrssException(HttpStatus.INTERNAL_SERVER_ERROR, "Can't read image with id=" + id + " and path=" + imagePath);
        }
    }
}
