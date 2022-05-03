package com.crss.crss.settings;


import io.swagger.v3.oas.models.Components;
import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Contact;
import io.swagger.v3.oas.models.info.Info;
import io.swagger.v3.oas.models.security.SecurityRequirement;
import io.swagger.v3.oas.models.security.SecurityScheme;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class SwaggerConfiguration {

    @Bean
    public OpenAPI openApi() {
        final String securitySchemeName = "bearerAuth";

        return new OpenAPI().info(new Info().title("CRSS").description("Cooking Recipe Search Service").version("v1.0")
                .contact(new Contact().name("Sharunov Evgeniy")))
            .addSecurityItem(new SecurityRequirement().addList(securitySchemeName)).components(
                new Components()
                    .addSecuritySchemes(securitySchemeName,
                        new SecurityScheme()
                            .type(SecurityScheme.Type.HTTP)
                            .scheme("bearer")
                            .bearerFormat("JWT")));
    }

}