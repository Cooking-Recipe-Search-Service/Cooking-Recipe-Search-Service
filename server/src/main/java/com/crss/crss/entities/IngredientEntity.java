package com.crss.crss.entities;

import java.util.ArrayList;
import java.util.List;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;
import org.hibernate.annotations.NaturalId;
import org.hibernate.annotations.NaturalIdCache;

@Entity
@Table(name = "ingredient")
@Data
@NoArgsConstructor
@NaturalIdCache
@Cache(
    usage = CacheConcurrencyStrategy.READ_WRITE
)
public class IngredientEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @NaturalId
    @Column(nullable = false)
    private String name;
    @Column(nullable = false)
    private MeasurementValueType measurementValueType;
    @ToString.Exclude
    @OneToMany(mappedBy = "ingredient", fetch = FetchType.LAZY)
    private List<RecipeIngredient> recipes = new ArrayList<>();

    public enum MeasurementValueType {
        GRAM("г"),
        MILLILITER("мл"),
        PIECE("шт");

        private final String string;

        MeasurementValueType(String string) {
            this.string = string;
        }

        public String getString() {
            return string;
        }
    }
}
