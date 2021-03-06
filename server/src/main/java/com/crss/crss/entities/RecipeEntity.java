package com.crss.crss.entities;

import com.crss.crss.dto.RecipeDtoIn;
import java.util.ArrayList;
import java.util.List;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.FetchType;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.GenerationType;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;


@Entity
@Table(name = "recipe")
@Data
@NoArgsConstructor
public class RecipeEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Column(nullable = false, unique = true)
    private String name;
    @Column(nullable = false)
    private int cookingTime;
    @Column(nullable = false)
    private Integer portionQuantity;
    @ManyToOne(fetch = FetchType.LAZY)
    private CountryEntity country;
    @ManyToOne(fetch = FetchType.LAZY)
    private CategoryEntity category;
    @ToString.Exclude
    @ManyToMany(cascade = {CascadeType.PERSIST, CascadeType.MERGE}, fetch = FetchType.LAZY)
    private List<UserEntity> lovers = new ArrayList<>();

    @OneToMany(
        mappedBy = "recipe",
        cascade = CascadeType.ALL,
        orphanRemoval = true
    )
    private List<RecipeIngredient> ingredients = new ArrayList<>();

    public RecipeEntity(RecipeDtoIn dto) {
        this.cookingTime = dto.getCookingTime();
        this.name = dto.getName();
        this.portionQuantity = dto.getPortionQuantity();
    }

    public void addLover(UserEntity lover) {
        if (!lovers.contains(lover)) {
            lovers.add(lover);
        }
    }

    public void deleteLover(UserEntity lover) {
        lovers.remove(lover);
    }
}
