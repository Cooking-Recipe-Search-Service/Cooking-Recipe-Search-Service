package com.crss.crss.entities;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.MapsId;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import lombok.ToString;

@EqualsAndHashCode(callSuper = true)
@Entity
@Table(name = "energy_value_per_portion")
@Data
public class EnergyValuePerPortionEntity extends EnergyValue {

    @Id
    private Long id;
    @OneToOne(fetch = FetchType.LAZY, optional = false)
    @MapsId
    @ToString.Exclude
    private RecipeEntity recipe;

    public void add(EnergyValuePerIngredientEntity energyValuePerIngredient) {
        setCalories(getCalories() + energyValuePerIngredient.getCalories());
        setCarbs(getCarbs() + energyValuePerIngredient.getCarbs());
        setFats(getFats() + energyValuePerIngredient.getFats());
        setProteins(getProteins() + energyValuePerIngredient.getProteins());
    }

    public void countForPortions(Integer portionQuantity) {
        setCalories(getCalories() / portionQuantity);
        setCarbs(getCarbs() / portionQuantity);
        setFats(getFats() / portionQuantity);
        setProteins(getProteins() / portionQuantity);
    }

    public EnergyValuePerPortionEntity(){
        super();
    }
}
