package com.thato.schoolmanagement.schoolmanagement.entity;

import jakarta.persistence.*;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
public class Learner {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true, nullable = false)
    private String birthId;

    private String fullName;

    @ManyToOne(optional = false)
    @JoinColumn(name = "grade_id", nullable = false)
    @JsonIgnoreProperties({"learners","assignments"})
    private Grade grade;

    private Integer rollNumber; // auto-calculated

    public Learner() {}

    // Getters & Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getBirthId() { return birthId; }
    public void setBirthId(String birthId) { this.birthId = birthId; }

    public String getFullName() { return fullName; }
    public void setFullName(String fullName) { this.fullName = fullName; }

    public Grade getGrade() { return grade; }
    public void setGrade(Grade grade) { this.grade = grade; }

    public Integer getRollNumber() { return rollNumber; }
    public void setRollNumber(Integer rollNumber) { this.rollNumber = rollNumber; }
}