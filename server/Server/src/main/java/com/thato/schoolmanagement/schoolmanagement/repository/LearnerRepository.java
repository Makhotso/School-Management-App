package com.thato.schoolmanagement.schoolmanagement.repository;

import com.thato.schoolmanagement.schoolmanagement.entity.Learner;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LearnerRepository extends JpaRepository<Learner, Long> {
}

