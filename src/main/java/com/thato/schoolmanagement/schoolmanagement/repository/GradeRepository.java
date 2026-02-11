package com.thato.schoolmanagement.schoolmanagement.repository;

import com.thato.schoolmanagement.schoolmanagement.entity.Grade;
import org.springframework.data.jpa.repository.JpaRepository;

public interface GradeRepository extends JpaRepository<Grade, Long> {
}

