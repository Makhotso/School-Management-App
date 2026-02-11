package com.thato.schoolmanagement.schoolmanagement.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class Learner {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String fullName;

    @ManyToOne
    @JoinColumn(name = "grade_id")
    private Grade grade;
}

