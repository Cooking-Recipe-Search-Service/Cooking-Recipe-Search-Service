package com.crss.crss.entities;

import com.crss.crss.dto.IngredientDtoIn.EnergyValueDto;
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

@Entity
@Table(name = "energy_value_per_ingredient")
@Data
@NoArgsConstructor
@EqualsAndHashCode(callSuper = true)
public class EnergyValuePerIngredientEntity extends EnergyValue {

    @Id
    private Long id;
    @OneToOne(fetch = FetchType.LAZY, optional = false)
    @MapsId
    @ToString.Exclude
    private IngredientEntity ingredient;

    public EnergyValuePerIngredientEntity(IngredientEntity ingredient, EnergyValueDto energyValueDto) {
        super(energyValueDto);
        this.ingredient = ingredient;
    }
}
