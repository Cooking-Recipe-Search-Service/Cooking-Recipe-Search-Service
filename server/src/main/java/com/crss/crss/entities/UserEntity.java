package com.crss.crss.entities;

import com.crss.crss.dto.SignupRequest;
import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "user")
@Data
@NoArgsConstructor
public class UserEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String username;
    private String email;
    private String password;
    private UserRole role;
    @ManyToMany
    private RecipeEntity recipeEntity;

    public UserEntity(SignupRequest signupRequest, String password) {
        this.username = signupRequest.getUsername();
        this.email = signupRequest.getEmail();
        this.password = password;
        this.role = signupRequest.getRole();
    }
}