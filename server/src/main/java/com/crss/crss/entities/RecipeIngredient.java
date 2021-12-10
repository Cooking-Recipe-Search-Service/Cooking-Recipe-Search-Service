package com.crss.crss.entities;

import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.ManyToOne;
import javax.persistence.MapsId;
import javax.persistence.Table;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "recipe_ingredient")
@Data
@NoArgsConstructor
public class RecipeIngredient {

    @EmbeddedId
    private RecipeIngredientId id;

    @ManyToOne(fetch = FetchType.LAZY)
    @MapsId("recipeId")
    private RecipeEntity recipe;

    @ManyToOne(fetch = FetchType.LAZY)
    @MapsId("ingredientId")
    private IngredientEntity ingredient;

    private Integer value;

    public RecipeIngredient(RecipeEntity recipe, IngredientEntity ingredient) {
        this.recipe = recipe;
        this.ingredient = ingredient;
        this.id = new RecipeIngredientId(recipe.getId(), ingredient.getId());
    }
}
