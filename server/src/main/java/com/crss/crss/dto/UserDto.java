package com.crss.crss.dto;

import com.crss.crss.entities.UserRole;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import java.util.List;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@JsonIgnoreProperties(ignoreUnknown = true)
public class UserDto {

    private Long id;
    private String username;
    private String email;
    private UserRole role;
    private List<RecipeSlimDto> recipes;
}
