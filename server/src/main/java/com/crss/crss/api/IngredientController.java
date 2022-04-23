package com.crss.crss.api;

import com.crss.crss.dto.IngredientDto;
import com.crss.crss.dto.IngredientSlimDto;
import com.crss.crss.mapper.DtoConverter;
import com.crss.crss.services.IngredientService;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;

@RestController
@RequestMapping("/api/ingredients")
@RequiredArgsConstructor(onConstructor_ = {@Autowired})
public class IngredientController {

    private final DtoConverter dtoConverter;
    private final IngredientService ingredientService;

    @GetMapping
    @CrossOrigin(origins = "http://localhost:4200")
    public List<IngredientSlimDto> getIngredients() {
        return dtoConverter.simpleConvert(ingredientService.getAllIngredients(), IngredientSlimDto.class);
    }

    @GetMapping("/{id}")
    @CrossOrigin(origins = "http://localhost:4200")
    public IngredientDto getIngredient(@PathVariable Long id) {
        return dtoConverter.getIngredientDto(ingredientService.getIngredientById(id));
    }

}
