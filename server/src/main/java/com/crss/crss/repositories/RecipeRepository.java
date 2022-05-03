package com.crss.crss.repositories;


import com.crss.crss.entities.QRecipeEntity;
import com.crss.crss.entities.RecipeEntity;

import org.bitbucket.gt_tech.spring.data.querydsl.value.operators.ExpressionProviderFactory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.querydsl.QuerydslPredicateExecutor;
import org.springframework.data.querydsl.binding.QuerydslBinderCustomizer;
import org.springframework.data.querydsl.binding.QuerydslBindings;
import org.springframework.stereotype.Repository;

@Repository
public interface RecipeRepository extends JpaRepository<RecipeEntity, Long>, QuerydslPredicateExecutor<RecipeEntity>,
    QuerydslBinderCustomizer<QRecipeEntity> {

    @Override
    default void customize(QuerydslBindings bindings, QRecipeEntity root) {

        bindings.bind(root.country.id)
            .all(ExpressionProviderFactory::getPredicate);
        bindings.bind(root.country.name)
            .all(ExpressionProviderFactory::getPredicate);


        bindings.bind(root.name)
            .all(ExpressionProviderFactory::getPredicate);
        bindings.bind(root.id)
            .all(ExpressionProviderFactory::getPredicate);
        bindings.bind(root.cookingTime)
            .all(ExpressionProviderFactory::getPredicate);
        bindings.bind(root.portionQuantity)
            .all(ExpressionProviderFactory::getPredicate);
        bindings.bind(root.category.id)
            .all(ExpressionProviderFactory::getPredicate);
        bindings.bind(root.category.name)
            .all(ExpressionProviderFactory::getPredicate);

        bindings.bind(root.ingredients.any().ingredient.name).as("ingredients.ingredient.name")
            .all(ExpressionProviderFactory::getPredicate);
        bindings.bind(root.ingredients.any().ingredient.id).as("ingredients.ingredient.id")
            .all(ExpressionProviderFactory::getPredicate);
        bindings.bind(root.ingredients.any().value).as("ingredients.value")
            .all(ExpressionProviderFactory::getPredicate);



    }
}