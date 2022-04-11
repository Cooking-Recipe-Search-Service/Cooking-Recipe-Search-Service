package com.crss.crss.repositories;

import com.crss.crss.entities.RecipeDescriptionEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DescriptionRepository extends JpaRepository<RecipeDescriptionEntity, Long> {

}