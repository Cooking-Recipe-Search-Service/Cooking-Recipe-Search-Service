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
@NoArgsConstructor
public class EnergyValuePerPortionEntity extends EnergyValue {

    @Id
    private Long id;
    @OneToOne(fetch = FetchType.LAZY, optional = false)
    @MapsId
    @ToString.Exclude
    private RecipeEntity recipe;
}
