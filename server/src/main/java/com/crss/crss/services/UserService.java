package com.crss.crss.services;

import com.crss.crss.entities.UserEntity;
import com.crss.crss.exceptions.CrssException;
import com.crss.crss.repositories.UserRepository;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor(onConstructor_ = {@Autowired})
public class UserService {

    private final UserRepository userRepository;
    private final RecipeService recipeService;

    public List<UserEntity> getAllUsers() {
        return userRepository.findAll();
    }

    public UserEntity getUserEntityByUsername(String username) {
        return userRepository.findByUsername(username)
            .orElseThrow(() -> new CrssException(HttpStatus.NOT_FOUND, "Cannot find user with username = " + username));
    }

    public UserEntity addRecipeToFavorites(Long recipeId) {
        UserEntity currentUser = getCurrentUser();
        return currentUser.addRecipe(recipeService.addUserToLovers(recipeId, currentUser));
    }

    public UserEntity deleteRecipeToFavorites(Long recipeId) {
        UserEntity currentUser = getCurrentUser();
        return currentUser.deleteRecipe(recipeService.deleteUserToLovers(recipeId, currentUser));
    }

    public UserEntity getCurrentUser() {
        return getUserEntityByUsername(getCurrentUserName());
    }

    private String getCurrentUserName() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if (authentication instanceof UsernamePasswordAuthenticationToken) {
            Object o = authentication.getPrincipal();
            if (o instanceof UserDetails) {
                UserDetails userDetails = (UserDetails) o;
                if (userDetails.getUsername() != null) {
                    return userDetails.getUsername();
                }
            }
        }
        throw new CrssException(HttpStatus.FORBIDDEN, "Can't find the current user");
    }

}
