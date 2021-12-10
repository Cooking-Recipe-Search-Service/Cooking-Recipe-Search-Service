package com.crss.crss.api;

import com.crss.crss.exceptions.CrssException;
import javax.servlet.http.HttpServletRequest;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;

@Slf4j
@ControllerAdvice(basePackageClasses = RecipeController.class)
public class CrssControllerAdvice {

    @ExceptionHandler(CrssException.class)
    @ResponseBody
    ResponseEntity<?> handleControllerException(HttpServletRequest request, CrssException ex) {
        log.warn("Exception during request {}: {}, {}", request.getRequestURI(), ex.getHttpStatus(), ex.getErrorMessage());
        return new ResponseEntity<>(ex.getErrorMessage(), ex.getHttpStatus());
    }
}
