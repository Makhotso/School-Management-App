package com.thato.schoolmanagement.schoolmanagement.repository;

import com.thato.schoolmanagement.schoolmanagement.entity.Teacher;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TeacherRepository extends JpaRepository<Teacher, Long> {
}

