package com.thato.schoolmanagement.schoolmanagement.entity;

import jakarta.persistence.*;

@Entity
public class Assignment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    private String description;

    @ManyToOne
    @JoinColumn(name = "teacher_id")
    private Teacher teacher;

    @ManyToOne
    @JoinColumn(name = "grade_id")
    private Grade grade;

    // Required by JPA
    public Assignment() {}

    // Getters
    public Long getId() { return id; }
    public String getTitle() { return title; }
    public String getDescription() { return description; }
    public Teacher getTeacher() { return teacher; }
    public Grade getGrade() { return grade; }

    // Setters
    public void setId(Long id) { this.id = id; }
    public void setTitle(String title) { this.title = title; }
    public void setDescription(String description) { this.description = description; }
    public void setTeacher(Teacher teacher) { this.teacher = teacher; }
    public void setGrade(Grade grade) { this.grade = grade; }
}
