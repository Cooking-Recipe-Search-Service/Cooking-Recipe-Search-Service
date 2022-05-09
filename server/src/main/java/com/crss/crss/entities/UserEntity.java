package com.crss.crss.entities;

import com.crss.crss.dto.SignupRequest;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import javax.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

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
    @ToString.Exclude
    @ManyToMany(mappedBy = "lovers", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    private List<RecipeEntity> recipes = new ArrayList<>();

    public UserEntity(SignupRequest signupRequest, String password) {
        this.username = signupRequest.getUsername();
        this.email = signupRequest.getEmail();
        this.password = password;
        this.role = signupRequest.getRole();
    }


    public UserEntity addRecipe(RecipeEntity recipe) {
        if (!recipes.contains(recipe)) {
            recipes.add(recipe);
        }
        return this;
    }

    public UserEntity deleteRecipe(RecipeEntity recipe) {
        recipes.remove(recipe);
        return this;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        UserEntity that = (UserEntity) o;
        return id.equals(that.id) && username.equals(that.username) && email.equals(that.email);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, username, email);
    }
}