package com.crss.crss.repositories;

import com.crss.crss.exceptions.CrssException;
import java.nio.file.Files;
import java.nio.file.Paths;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Repository;

@Repository
@Slf4j
public class FileSystemRepository {

    @Value("${file-system.storage.images.recipe}")
    private String RESOURCES_DIR_RECIPE;

    @Value("${file-system.storage.images.country}")
    private String RESOURCES_DIR_COUNTRY;

    private final String IMAGE_FORMAT = ".jpeg";


    public byte[] findRecipeImageInFileSystem(String name) {
        return getImageBytes(name, RESOURCES_DIR_RECIPE);
    }

    public byte[] findCountryImageInFileSystem(String name) {
        return getImageBytes(name, RESOURCES_DIR_COUNTRY);
    }

    private byte[] getImageBytes(String name, String resourcesDir) {
        String imagePath = resourcesDir + name + IMAGE_FORMAT;
        if (!Files.exists(Paths.get(imagePath))) {
            log.warn("Can't find image with name=" + name + " and path=" + imagePath);
            return new byte[0];
        }
        try {
            return Files.readAllBytes(Paths.get(imagePath));
        } catch (Exception e) {
            throw new CrssException(HttpStatus.INTERNAL_SERVER_ERROR, "Can't read image with name=" + name + " and path=" + imagePath);
        }
    }
}
