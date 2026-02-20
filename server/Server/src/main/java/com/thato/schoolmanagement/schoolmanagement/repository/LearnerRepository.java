package com.thato.schoolmanagement.schoolmanagement.repository;

import com.thato.schoolmanagement.schoolmanagement.entity.Learner;
import com.thato.schoolmanagement.schoolmanagement.entity.Grade;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;
import java.util.Optional;

public interface LearnerRepository extends JpaRepository<Learner, Long> {

    Optional<Learner> findByBirthId(String birthId);

    List<Learner> findByGradeIdOrderByRollNumberAsc(Long gradeId);

    List<Learner> findByGradeOrderByRollNumberAsc(Grade grade);
}