package com.crss.crss.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.MapsId;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Entity
@Table(name = "recipe_instruction")
@Data
@NoArgsConstructor
public class RecipeInstructionEntity {

    @Id
    private Long id;
    @Column(columnDefinition = "TEXT")
    private String instruction;
    @OneToOne(fetch = FetchType.LAZY, optional = false)
    @MapsId
    @ToString.Exclude
    private RecipeEntity recipe;

}
