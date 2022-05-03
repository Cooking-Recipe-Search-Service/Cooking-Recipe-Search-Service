package com.crss.crss.dto;

import com.crss.crss.entities.UserEntity;
import com.crss.crss.entities.UserRole;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import java.util.Set;

import javax.validation.constraints.*;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@JsonIgnoreProperties(ignoreUnknown = true)
public class SignupRequest {

    @NotBlank
    @Size(min = 3, max = 20)
    private String username;

    @NotBlank
    @Size(max = 50)
    @Email
    private String email;

    private UserRole role;

    @NotBlank
    @Size(min = 6, max = 40)
    private String password;
}