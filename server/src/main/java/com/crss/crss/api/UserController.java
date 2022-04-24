package com.crss.crss.api;

import com.crss.crss.dto.UserDto;
import com.crss.crss.mapper.DtoConverter;
import com.crss.crss.services.UserService;
import java.security.Principal;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/users")
@RequiredArgsConstructor(onConstructor_ = {@Autowired})
public class UserController {

    private final DtoConverter dtoConverter;
    private final UserService userService;

    @GetMapping
    public List<UserDto> getAll() {
        return dtoConverter.simpleConvert(userService.getAllUsers(), UserDto.class);
    }

    @GetMapping("/principal")
    public Principal user(Principal user) {
        return user;
    }

    @GetMapping("/current")
    public UserDto currentUser() {
        return dtoConverter.simpleConvert(userService.getCurrentUser(), UserDto.class);
    }


}
