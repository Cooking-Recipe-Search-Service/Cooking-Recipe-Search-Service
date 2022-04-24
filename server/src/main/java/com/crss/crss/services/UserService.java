package com.crss.crss.services;

import com.crss.crss.entities.UserEntity;
import com.crss.crss.exceptions.CrssException;
import com.crss.crss.google.GoogleUserInfo;
import com.crss.crss.repositories.UserRepository;
import java.util.List;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.oauth2.client.authentication.OAuth2AuthenticationToken;
import org.springframework.security.oauth2.core.OAuth2AccessToken;
import org.springframework.security.oauth2.core.oidc.user.OidcUser;
import org.springframework.security.oauth2.jwt.Jwt;
import org.springframework.stereotype.Service;
import org.springframework.security.oauth2.server.resource.authentication.JwtAuthenticationToken;


@Service
@RequiredArgsConstructor(onConstructor_ = {@Autowired})
@Slf4j
public class UserService {

    private final UserRepository userRepository;

    public List<UserEntity> getAllUsers() {
        return userRepository.findAll();
    }

    public UserEntity getUserById(Long id) {
        return userRepository.findById(id)
            .orElseThrow(() -> new CrssException(HttpStatus.NOT_FOUND, "Cannot find user with id=" + id));
    }

    public UserEntity getCurrentUser() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if (authentication instanceof OAuth2AuthenticationToken) {
            GoogleUserInfo googleUserInfo = new GoogleUserInfo(((OAuth2AuthenticationToken) authentication).getPrincipal().getAttributes());
            return userRepository.findByEmail(googleUserInfo.getEmail()).orElseThrow(
                () -> new CrssException(HttpStatus.NOT_FOUND, "Cannot find current user with email=" + googleUserInfo.getEmail()));
        } else {
            throw new CrssException(HttpStatus.NOT_FOUND, "Cannot get current user");
        }
    }

}
