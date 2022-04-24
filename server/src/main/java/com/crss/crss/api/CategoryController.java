package com.crss.crss.api;

import com.crss.crss.dto.CategoryDto;
import com.crss.crss.mapper.DtoConverter;
import com.crss.crss.services.CategoryService;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/category")
@RequiredArgsConstructor(onConstructor_ = {@Autowired})
public class CategoryController {

    private final DtoConverter dtoConverter;
    private final CategoryService categoryService;

    @GetMapping
    public List<CategoryDto> getCategories() {
        return dtoConverter.simpleConvert(categoryService.getAllCategories(), CategoryDto.class);
    }

}
