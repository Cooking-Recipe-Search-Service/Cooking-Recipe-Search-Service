package com.crss.crss.settings;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Contact;
import io.swagger.v3.oas.annotations.info.Info;
import org.springframework.context.annotation.Configuration;


@Configuration
@OpenAPIDefinition(info = @Info(title = "CRSS", description = "Cooking Recipe Search Service",
    version = "1.0", contact = @Contact(name = "Sharunov Evgeniy", email = "easharunov@edu.hse.ru")))
public class SwaggerConfiguration {


}