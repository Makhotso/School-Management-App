package com.thato.schoolmanagement.schoolmanagement.entity;

import jakarta.persistence.*;

@Entity
public class Learner {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String fullName;

    @ManyToOne
    @JoinColumn(name = "grade_id")
    private Grade grade;

    public Learner() {}

    // Getters
    public Long getId() { return id; }
    public String getFullName() { return fullName; }
    public Grade getGrade() { return grade; }

    // Setters
    public void setId(Long id) { this.id = id; }
    public void setFullName(String fullName) { this.fullName = fullName; }
    public void setGrade(Grade grade) { this.grade = grade; }
}
