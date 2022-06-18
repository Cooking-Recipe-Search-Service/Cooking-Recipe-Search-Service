package com.crss.crss.api;

import com.crss.crss.dto.UserDto;
import com.crss.crss.mapper.DtoConverter;
import com.crss.crss.services.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/user")
@RequiredArgsConstructor(onConstructor_ = {@Autowired})
public class UserController {

    private final DtoConverter dtoConverter;
    private final UserService userService;


    @GetMapping("/current")
    public UserDto getCurrentUser() {
        return dtoConverter.convertUser(userService.getCurrentUser());
    }

    @PutMapping("/addRecipeToFavoritesByRecipeId/{id}")
    public UserDto addRecipeToFavorites(@PathVariable Long id) {
        return dtoConverter.simpleConvert(userService.addRecipeToFavorites(id), UserDto.class);
    }

    @PutMapping("/deleteRecipeToFavoritesByRecipeId/{id}")
    public UserDto deleteRecipeToFavorites(@PathVariable Long id) {
        return dtoConverter.simpleConvert(userService.deleteRecipeToFavorites(id), UserDto.class);
    }
}
