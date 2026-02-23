package com.thato.schoolmanagement.schoolmanagement.entity;

import jakarta.persistence.*;
import jakarta.persistence.Entity;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import java.util.List;

@Entity
@Table (name = "grades")
public class Grade {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    // Optional: keep track of learners and assignments
    @OneToMany(mappedBy = "grade")
    @JsonIgnoreProperties("grade")
    private List<Learner> learners;

    @OneToMany(mappedBy = "grade")
    @JsonIgnoreProperties("grade")
    private List<Assignment> assignments;

    public Grade() {}

    // Getters & Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public List<Learner> getLearners() { return learners; }
    public void setLearners(List<Learner> learners) { this.learners = learners; }

    public List<Assignment> getAssignments() { return assignments; }
    public void setAssignments(List<Assignment> assignments) { this.assignments = assignments; }
}