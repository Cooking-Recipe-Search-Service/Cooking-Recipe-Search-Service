package com.crss.crss.repositories;

import com.crss.crss.entities.EnergyValuePerPortionEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EnergyValuePerPortionRepository extends JpaRepository<EnergyValuePerPortionEntity, Long> {

}