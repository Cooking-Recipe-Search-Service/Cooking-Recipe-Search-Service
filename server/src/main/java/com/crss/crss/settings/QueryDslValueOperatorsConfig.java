package com.crss.crss.settings;

import org.bitbucket.gt_tech.spring.data.querydsl.value.operators.experimental.QuerydslPredicateArgumentResolverBeanPostProcessor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import org.springframework.data.querydsl.binding.QuerydslBindingsFactory;
import org.springframework.format.support.DefaultFormattingConversionService;


@Configuration
public class QueryDslValueOperatorsConfig {


    @Bean
    public QuerydslPredicateArgumentResolverBeanPostProcessor querydslPredicateArgumentResolverBeanPostProcessor(
        QuerydslBindingsFactory factory, DefaultFormattingConversionService conversionServiceDelegate) {
        return new QuerydslPredicateArgumentResolverBeanPostProcessor(factory, conversionServiceDelegate);
    }
}
