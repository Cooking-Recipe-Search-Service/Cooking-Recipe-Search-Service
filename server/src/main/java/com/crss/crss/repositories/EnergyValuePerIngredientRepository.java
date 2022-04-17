package com.crss.crss.repositories;

import com.crss.crss.entities.EnergyValuePerIngredientEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EnergyValuePerIngredientRepository extends JpaRepository<EnergyValuePerIngredientEntity, Long> {

}