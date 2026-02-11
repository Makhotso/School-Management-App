package com.thato.schoolmanagement.schoolmanagement.entity;

import jakarta.persistence.*;
import lombok.Data;
import com.thato.schoolmanagement.schoolmanagement.services.AssignmentService;


@Entity
@Data
public class Grade {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name; // e.g. "Grade 1"
}

