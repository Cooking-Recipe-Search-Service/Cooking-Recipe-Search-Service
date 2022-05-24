package com.crss.crss.api;

import com.crss.crss.dto.IngredientDto;
import com.crss.crss.dto.IngredientDtoIn;
import com.crss.crss.dto.IngredientSlimDto;
import com.crss.crss.entities.IngredientEntity.MeasurementValueType;
import com.crss.crss.mapper.DtoConverter;
import com.crss.crss.services.IngredientService;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/ingredients")
@RequiredArgsConstructor(onConstructor_ = {@Autowired})
public class IngredientController {

    private final DtoConverter dtoConverter;
    private final IngredientService ingredientService;

    @GetMapping
    public List<IngredientSlimDto> getIngredients() {
        return dtoConverter.simpleConvert(ingredientService.getAllIngredients(), IngredientSlimDto.class);
    }

    @GetMapping("/{id}")
    public IngredientDto getIngredient(@PathVariable Long id) {
        return dtoConverter.getIngredientDto(ingredientService.getIngredientById(id));
    }

    @PostMapping
    public IngredientDto createIngredient(@RequestBody IngredientDtoIn dto) {
        return dtoConverter.getIngredientDto(ingredientService.createIngredient(dto));
    }

    @GetMapping("/types")
    public MeasurementValueType[] getAllTypes() {
        return MeasurementValueType.values();
    }

    @DeleteMapping("/{id}")
    public void deleteIngredient(@PathVariable Long id) {
        ingredientService.deleteIngredientById(id);
    }

}
