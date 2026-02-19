package com.thato.schoolmanagement.schoolmanagement.entity;

import jakarta.persistence.*;

@Entity
public class Learner {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id; // database-generated ID

    @Column(unique = true, nullable = false)
    private String birthId; // national/birth ID

    private String fullName;

    @ManyToOne
    @JoinColumn(name = "grade_id")
    private Grade grade;

    private Integer rollNumber; // sequential number per grade

    public Learner() {}

    // Getters & Setters
    public Long getId() { return id; }

    public String getBirthId() { return birthId; }
    public void setBirthId(String birthId) { this.birthId = birthId; }

    public String getFullName() { return fullName; }
    public void setFullName(String fullName) { this.fullName = fullName; }

    public Grade getGrade() { return grade; }
    public void setGrade(Grade grade) { this.grade = grade; }

    public Integer getRollNumber() { return rollNumber; }
    public void setRollNumber(Integer rollNumber) { this.rollNumber = rollNumber; }
}
