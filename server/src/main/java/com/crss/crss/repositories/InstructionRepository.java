package com.crss.crss.repositories;

import com.crss.crss.entities.RecipeInstructionEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface InstructionRepository extends JpaRepository<RecipeInstructionEntity, Long> {

}