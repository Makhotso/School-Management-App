package com.thato.schoolmanagement.schoolmanagement.entity;

import jakarta.persistence.*;
import jakarta.persistence.Entity;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table (name = "assignments")
public class Assignment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    private String description;

    @ManyToOne(optional = false)
    @JoinColumn(name = "teacher_id", nullable = false)
    @JsonIgnoreProperties("assignments")
    private Teacher teacher;

    @ManyToOne(optional = false)
    @JoinColumn(name = "grade_id", nullable = false)
    @JsonIgnoreProperties({"learners","assignments"})
    private Grade grade;

    public Assignment() {}

    // Getters & Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }

    public Teacher getTeacher() { return teacher; }
    public void setTeacher(Teacher teacher) { this.teacher = teacher; }

    public Grade getGrade() { return grade; }
    public void setGrade(Grade grade) { this.grade = grade; }
}