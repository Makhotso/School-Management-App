package com.thato.schoolmanagement.schoolmanagement.repository;

import com.thato.schoolmanagement.schoolmanagement.entity.Learner;
import com.thato.schoolmanagement.schoolmanagement.entity.Grade;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface LearnerRepository extends JpaRepository<Learner, Long> {

    // Find learner by birth ID
    Optional<Learner> findByBirthId(String birthId);

    // Get highest roll number in a specific grade
    @Query("SELECT MAX(l.rollNumber) FROM Learner l WHERE l.grade.id = :gradeId")
    Integer findMaxRollNumberByGrade(@Param("gradeId") Long gradeId);

    // Get learners in a grade ordered by roll number (for reordering after delete)
    List<Learner> findByGradeIdOrderByRollNumberAsc(Long gradeId);

    // Alternative: Use Grade entity directly
    List<Learner> findByGradeOrderByRollNumberAsc(Grade grade);
}
