package com.crss.crss.repositories;

import com.crss.crss.entities.IngredientEntity;
import com.crss.crss.entities.QIngredientEntity;
import com.crss.crss.entities.QRecipeEntity;
import com.crss.crss.entities.QRecipeIngredient;
import org.bitbucket.gt_tech.spring.data.querydsl.value.operators.ExpressionProviderFactory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.querydsl.QuerydslPredicateExecutor;
import org.springframework.data.querydsl.binding.QuerydslBinderCustomizer;
import org.springframework.data.querydsl.binding.QuerydslBindings;
import org.springframework.stereotype.Repository;

@Repository
public interface IngredientRepository extends JpaRepository<IngredientEntity, Long>, QuerydslPredicateExecutor<IngredientEntity>,
    QuerydslBinderCustomizer<QIngredientEntity> {
    @Override
    default void customize(QuerydslBindings bindings, QIngredientEntity root) {

        bindings.bind(root.name)
            .all(ExpressionProviderFactory::getPredicate);
        bindings.bind(root.id)
            .all(ExpressionProviderFactory::getPredicate);
    }
}